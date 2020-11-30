import spark.Spark.*;
import spark.Spark;
import spark.Request;
import spark.Response;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;

import javax.xml.xpath.XPath;



public class Server
{
    final static boolean debug = false;
    private final Logger log = LoggerFactory.getLogger(Server.class);

    public Server()
    {
        this.configureRestfulApiServer();
        //this.processRestfulApiRequests();
    }



    private void configureRestfulApiServer() {
        Spark.port(8080);
        System.out.println("Server configured to listen on port 8080");




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
        Spark.get("/user", "application/json", (request, response)-> {
            String user = request.queryParams("instagram");

            return "null";
        });
    }

    private void processRestfulApiRequests()
    {
        Spark.get("/",this::echoRequest);

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
        ClassLoader originalClassLoader = Thread.currentThread().getContextClassLoader();
        try {
            Thread.currentThread().setContextClassLoader(Server.class.getClassLoader());
        } finally {
            Thread.currentThread().setContextClassLoader(originalClassLoader);
        }

        Server restfulServer = new Server(); //This should never return.
    }

}
