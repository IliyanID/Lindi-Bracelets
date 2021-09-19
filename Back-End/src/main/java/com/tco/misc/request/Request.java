package com.tco.misc.request;

import org.json.JSONObject;
import org.json.JSONArray;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.URL;


public class Request {
    public JSONObject obj;
    public Request(String requestLink){
        obj = new JSONObject(getRequestString(requestLink));
    }

    public JSONArray getArray(String arrayName){
        return obj.getJSONArray(arrayName);
    }

    private String getRequestString(String requestLink){
        String responseStr = "";

        BufferedReader in = null;
        try {
            URL url = new URL(requestLink);
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("GET");

            in = new BufferedReader(new InputStreamReader(con.getInputStream()));
            String inputLine;
            StringBuffer response = new StringBuffer();

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            responseStr = response.toString();
        }
        catch(Exception e){
            responseStr="";
            try{Thread.sleep(1000);}catch(Exception ignored){}
            getRequestString(requestLink);
        }



        return responseStr;
    }
}
