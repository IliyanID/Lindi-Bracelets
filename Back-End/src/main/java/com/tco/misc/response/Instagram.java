package com.tco.misc.response;

import org.json.JSONObject;

import com.tco.misc.request.Request;

import org.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Instagram extends Response{

    private final Logger log = LoggerFactory.getLogger(Instagram.class);
    public Instagram(){

            getConfig("Instagram");

            JSONArray resultsArray = new Request(requestBaseURL + APIKey).getArray("data");
            log.info("Sent Request");

            for(int i = 0; i < resultsArray.length(); i++){
                JSONObject result = resultsArray.getJSONObject(i);
                String link = result.getString("media_url");
                String description = "";
                String page = "";
                int id = 0;
                
                //System.out.println("Added Instagram Item");
                //System.out.println(link + "\n\n");

                Response.add(new responseData(link, description, page, id));

            }
            log.info("Completed Request");


    }


}
