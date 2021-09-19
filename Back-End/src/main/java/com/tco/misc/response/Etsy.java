package com.tco.misc.response;

import org.json.JSONObject;

import com.tco.misc.request.Request;

import org.json.JSONArray;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Etsy extends Response{
    private final Logger log = LoggerFactory.getLogger(Etsy.class);
    public Etsy(){
        getConfig("Etsy");

        JSONArray resultsArray = new Request(requestBaseURL + APIKey).getArray("results");
        log.info("Sent Request");
        
        for(int i = 0; i < resultsArray.length(); i++){
            JSONObject result = resultsArray.getJSONObject(i);
            String description = result.getString("description");
            String page = result.getString("url");
            int id = result.getInt("listing_id");

            String link = getItemCoverPhoto(id,APIKey);
            
            //System.out.println("Added Etsy Item");
            //System.out.println(link + "\n\n");

            Response.add(new responseData(link, description, page, id));

        }
        log.info("Completed Request");
    }

    private String getItemCoverPhoto(int id,String APIKey){
        String requestURL = "https://openapi.etsy.com/v2/listings/" + id + "/images?api_key=" + APIKey;
        JSONObject coverPhotoObj= new Request(requestURL).getArray("results").getJSONObject(0);
        return coverPhotoObj.getString("url_fullxfull");
    }
}
