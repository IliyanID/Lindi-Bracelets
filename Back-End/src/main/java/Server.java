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
import java.util.Timer;
import java.util.TimerTask;

import javax.xml.xpath.XPath;

import static spark.Spark.secure;


public class Server
{
    String insta_key = "IGQVJVNWxldmpTaUxtanpGRTNxSUFtc1YzM1ZAlbS1IQk0zVWw3Sk5fYlY4MzJsdWlCb1RjRXlBZAGgtSEtSSHlVdlEydGR0NnotQXRGZAktWc3FrUmY3X3VLdmZAuT250WDlvNE5HTXh3";

    static String[][] etsyImages = null;
    static String[] instagramImages = null;

    final static boolean debug = false;
    private final Logger log = LoggerFactory.getLogger(Server.class);

    public Server()
    {
        this.configureRestfulApiServer();
        this.processRestfulApiRequests();
    }





    private void configureRestfulApiServer() {


        Spark.port(80);
        System.out.println("Server configured to listen on port 80");

        //String keyStoreLocation = "deploy/keystore.jks";
        //String keyStorePassword = "password";
        //Spark.secure(keyStoreLocation, keyStorePassword, null, null);



        int delay = 10000; // delay for 10 sec.
        int period = 3600000 * 24; // repeat every 24 hours.

        Timer timer = new Timer();

        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                System.out.println("Refreshing Resources");
                getEtsyImages();
                getInstagramImages();
            }
        }, delay, period);


        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                JSONObject obj = new JSONObject(getResponse(insta_key));
                insta_key = obj.getString("access_token");
            }
        }, delay, period*10);






       if(debug)
        {
            String projectDir = System.getProperty("user.dir");
            projectDir = new File(projectDir).getParent().toString();
            Spark.staticFiles.location("C:/Users/Iliyan/Documents/GitHub/Lindi-Bracelets/Front-End/public");



            System.out.println(projectDir + "/Front-End/ublic\\index.html");
        }
        else{
            Spark.staticFileLocation("/public/build");
        }


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
    private void getInstagramImages(){

        String allPostsURL = "https://graph.instagram.com/me/media?fields=media_url&access_token=" + insta_key;

        JSONArray allPosts = new JSONArray(new JSONObject(getResponse(allPostsURL)).getJSONArray("data"));
        String[] instagramImages_temp = new String[allPosts.length()];
        boolean success = false;
        for(int i =0; i<allPosts.length();i++)
        {
            try {
                instagramImages_temp[i] = allPosts.getJSONObject(i).getString("media_url");
                System.out.println("Instagram URL: " + instagramImages_temp[i]);
                success = true;
            }
            catch(Exception ignored){}
        }
        if(success)
            for(int i = 0; i < allPosts.length(); i++){
                instagramImages[i] = instagramImages_temp[i];
            }
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
            etsyImages = new String[count][2];
            String responseHTML = "";
            for(int i = 0;i < count;i++)
            {
                try {
                    int currentListingID = arrayListingsJSON.getJSONObject(i).getInt("listing_id");
                    System.out.println("Current Etsy Listing ID: " + currentListingID);
                    individualListingsID[i] = currentListingID;

                   String storePageURL = arrayListingsJSON.getJSONObject(i).getString("url");

                    String listingURL = "https://openapi.etsy.com/v2/listings/" + individualListingsID[i] + "/images?api_key=" + api_key;
                    JSONObject listingJSON = new JSONObject(getResponse(listingURL));
                    JSONArray listingID = listingJSON.getJSONArray("results");

                    String pictureURL = listingID.getJSONObject(0).getString("url_fullxfull");
                    etsyImages[i][0] = pictureURL;
                    etsyImages[i][1] = storePageURL;
                    System.out.println("Main Etsy Picture: " + pictureURL);
                    responseHTML += "<img src=\"" + pictureURL + "\"style=\"width:100px;\"/>";
                }
                catch(Exception ignored){}
            }
            System.out.println("Received Resources");

    }

    private void processRestfulApiRequests()
    {
        /*String keyStoreLocation = "deploy/keystore.jks";
        String keyStorePassword = "keypass";
        secure(keyStoreLocation, keyStorePassword, null, null);*/




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
                gallery.put("link",etsyImages[i][0]);
                gallery.put("page",etsyImages[i][1]);
                gallery.put("description","");


                obj.put(gallery);
            }
            System.out.println("Entered Etsy Images");
            return obj;
        });

        Spark.get("/InstagramImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success
            // response.setCharacterEncoding("UTF-8");


            JSONArray obj = new JSONArray();
            for(int i = 0; i < instagramImages.length; i++)
            {
                JSONObject gallery = new JSONObject();
                gallery.put("id",i);
                gallery.put("link",instagramImages[i]);
                gallery.put("description","");


                obj.put(gallery);
            }
            System.out.println("Entered Instagram Images");
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
