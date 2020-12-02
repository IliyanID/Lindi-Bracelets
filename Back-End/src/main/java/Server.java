import jdk.nashorn.internal.ir.annotations.Ignore;
import org.json.JSONArray;
import spark.Spark.*;
import spark.Spark;
import spark.Request;
import spark.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.json.JSONObject;

import java.io.*;

import java.lang.reflect.Field;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.Iterator;
import java.util.Scanner;

import javax.xml.xpath.XPath;



public class Server
{
    static String[] etsyImages = null;
    final static boolean debug = false;
    private final Logger log = LoggerFactory.getLogger(Server.class);

    public Server()
    {
        this.configureRestfulApiServer();
        this.processRestfulApiRequests();
    }



    private void configureRestfulApiServer() {


        getEtsyImages();

        Spark.port(8080);
        System.out.println("Server configured to listen on port 80");

        //String keyStoreLocation = "deploy/keystore.jks";
        //String keyStorePassword = "password";
        //Spark.secure(keyStoreLocation, keyStorePassword, null, null);









       /* if(debug)
        {
            String projectDir = System.getProperty("user.dir");
            projectDir = new File(projectDir).getParent().toString();
            Spark.staticFiles.location("C:/Users/Iliyan/Documents/GitHub/Lindi-Bracelets/Front-End/public");



            System.out.println(projectDir + "/Front-End/ublic\\index.html");
        }
        else{
            Spark.staticFileLocation("/public/build");
        }*/


       // Spark.secure("deploy/KeyStore.jks", "password", null, null);
    }

    private static String getResponse(String inputURL){
        String returnStr = "";

        BufferedReader in = null;
        try {
            URL url = new URL(inputURL);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            returnStr = response.toString();
        }
        catch(Exception e){
            returnStr="";
            try{Thread.sleep(1000);}catch(Exception ignored){}
            getResponse(inputURL);
        }
        return returnStr;
    }
    private void getEtsyImages(){
            String shop_id = "16417755";
            String api_key = "n4vavv9beuogz0iewzt0to7v";
            String allListingsURL = "https://openapi.etsy.com/v2/shops/" + shop_id +"/listings/active?api_key=" + api_key;

            // spark.response.type("text/html");

            //URL url = new URL("https://openapi.etsy.com/v2/listings/" + listingId +"/images?api_key=" + etsyApiKey);

            JSONObject allListingsJSON = new JSONObject(getResponse(allListingsURL));
            JSONArray arrayListingsJSON = allListingsJSON.getJSONArray("results");

            //System.out.println(allListingsJSON);
            int count = allListingsJSON.getInt("count");
            int[] individualListingsID = new int[count];
            etsyImages = new String[count];
            String responseHTML = "";
            for(int i = 0;i < count;i++)
            {
                try {
                    int currentListingID = arrayListingsJSON.getJSONObject(i).getInt("listing_id");
                    System.out.println("Current Listing ID: " + currentListingID);
                    individualListingsID[i] = currentListingID;

                    String listingURL = "https://openapi.etsy.com/v2/listings/" + individualListingsID[i] + "/images?api_key=" + api_key;
                    JSONObject listingJSON = new JSONObject(getResponse(listingURL));
                    JSONArray listingID = listingJSON.getJSONArray("results");

                    String pictureURL = listingID.getJSONObject(0).getString("url_fullxfull");
                    etsyImages[i] = pictureURL;
                    System.out.println("Main Picture: " + pictureURL);
                    responseHTML += "<img src=\"" + pictureURL + "\"style=\"width:100px;\"/>";
                }
                catch(Exception ignored){}
            }

    }

    private void processRestfulApiRequests()
    {
        Spark.staticFileLocation("/public/build");

        Spark.get("/EtsyImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success
           // response.setCharacterEncoding("UTF-8");


            JSONArray obj = new JSONArray();
            for(int i = 0; i < etsyImages.length; i++)
            {
                JSONObject gallery = new JSONObject();
                gallery.put("id",i);
                gallery.put("link",etsyImages[i]);
                gallery.put("description","");


                obj.put(gallery);
            }
            System.out.println("Entered");
            return obj;
        });
        //Spark.get("/",this::echoRequest);
    }

    private String echoRequest(Request request, Response response)
    {
        response.type("text/html");
        response.header("Access-Control-Allow-Origin","*");
        response.status(200); //Success

        return "<a href='www.google.com'>hello</a>";

    }

    private String HttpRequestToJson(Request request)
    {

        log.info(request.body());
        return "body: " + request.body();
    }

    public static void main(String[] args)
    {

        Server restfulServer = new Server(); //This should never return.
    }

}
