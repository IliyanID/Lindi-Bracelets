package com.tco.misc;

import com.tco.misc.request.Request;


import org.json.JSONArray;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class RefreshToken {
    private final Logger log = LoggerFactory.getLogger(RefreshToken.class);

    public RefreshToken(){
        Config configObj = new Config();
        JSONArray configs = configObj.toJSONArray();

        log.info("Refresh Token Initiated");
        for(int i = 0; i < configs.length(); i++){
            JSONObject config = configs.getJSONObject(i);
            if(!config.getString("requestName").equals("Instagram"))
                continue;

            String APIKey = config.getString("APIKey");
            log.info("Current APIKey: " + APIKey);

            String requestURL = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=";

            JSONObject refreshResponse = new Request(requestURL + APIKey).obj;

            String newAPIKey = refreshResponse.getString("access_token");
            log.info("New APIKey: " + newAPIKey);

            config.put("APIKey",newAPIKey);
        }

        configObj.WriteConfig(configs);

    }
}
