package com.tco.Server;


import spark.Service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Timer;
import java.util.TimerTask;

//import javax.xml.xpath.XPath;
//import static spark.Spark.secure;

import com.tco.misc.response.Etsy;
import com.tco.misc.response.Instagram;
import com.tco.misc.RefreshToken;
import com.tco.misc.Config;

public class Server
{
    private final int period = 3600000; // repeat every hour.
    private final Logger log = LoggerFactory.getLogger(Server.class);
    private Etsy etsy;
    private Instagram instagram;
    private Service https;
    private Service http;

    private int NumOfInstaRequests = 0;
    private int NumOfEtsyRequests = 0;

    public Server()
    {
        this.configureRestfulApiServer();
        this.processRestfulApiRequests();
    }

    private void configureRestfulApiServer() {
        https = Service.ignite().port(443).threadPool(20);
        http = Service.ignite().port(80).threadPool(10);
        System.out.println("Server configured to listen on port 80 and 443");

        


        String keyStoreLocation = new Config().getRootDirectory() + "/Back-End/src/main/resources/mykeystore.jks";
        String keyStorePassword = "password";
        https.secure(keyStoreLocation, keyStorePassword, null, null);

        https.staticFiles.location("/public/build");

        Timer timer = new Timer();
        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                log.info("Refreshing Resources");
                etsy = new Etsy();
                instagram = new Instagram();
                
            }
        }, 0, period);

        timer.scheduleAtFixedRate(new TimerTask() {
            public void run() {
                log.info("Refreshing APIKey");
                new RefreshToken();
            }
        }, period*10*24, period*10*24);

    }

    private void processRestfulApiRequests()
    {
        https.get("/Analytics",(request,response)->{
            response.type("text/html");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success
            return (
                "Number of Visits: " + Math.min(NumOfEtsyRequests,NumOfInstaRequests) + "<br/>"+
                "Number of Requests for Etsy Images: " + NumOfEtsyRequests + "<br/>"+
                "Number of Requests for Instagram Images: " + NumOfInstaRequests + "<br/>"
            );
        });

        https.get("/EtsyImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success
            NumOfEtsyRequests++;
            return etsy.getJSONResponse();
        });

        https.get("/InstagramImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success

            NumOfInstaRequests++;
            return instagram.getJSONResponse();
        });

        https.get("/defaultsite",(request,response)->{
            response.redirect("https://www.lindibracelets.com");
            return "";
        });

        http.before(((request, response) -> {
            final String url = request.url();
            if (url.startsWith("http://"))
            {
                final String[] split = url.split("http://");
                response.redirect("https://" + split[1]);
            }
            
        }));
    }

    public static void main(String[] args)
    {
        new Server(); //This should never return.
    }

}
