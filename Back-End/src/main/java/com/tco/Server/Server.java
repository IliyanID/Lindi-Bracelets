package com.tco.Server;

import spark.Spark;

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
    //private final int delay = 10000; // delay for 10 sec.
    private final int period = 3600000 * 24; // repeat every 24 hours.
    private final Logger log = LoggerFactory.getLogger(Server.class);
    private Etsy etsy;
    private Instagram instagram;

    public Server()
    {
        this.configureRestfulApiServer();
        this.processRestfulApiRequests();
    }

    private void configureRestfulApiServer() {
        Spark.port(443);
        System.out.println("Server configured to listen on port 80");

        


        String keyStoreLocation = new Config().getRootDirectory() + "/Back-End/src/main/resources/mykeystore.jks";
        String keyStorePassword = "password";
        Spark.secure(keyStoreLocation, keyStorePassword, null, null);

        Spark.staticFiles.location("/public/build");

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
        }, period*10, period*10);

    }

    private void processRestfulApiRequests()
    {
        Spark.get("/EtsyImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success
            return etsy.getJSONResponse();
        });

        Spark.get("/InstagramImages",(request,response)->{
            response.type("application/json");
            response.header("Access-Control-Allow-Origin","*");
            response.status(200); //Success

            return instagram.getJSONResponse();
        });
    }

    public static void main(String[] args)
    {
        new Server(); //This should never return.
    }

}
