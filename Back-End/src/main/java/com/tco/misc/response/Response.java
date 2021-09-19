package com.tco.misc.response;

import com.tco.misc.Config;

import org.json.JSONObject;
import java.util.ArrayList;
import java.util.List;

import com.google.gson.Gson;
import com.google.gson.JsonElement;
import com.google.gson.reflect.TypeToken;
import com.google.gson.JsonArray;



public class Response {
    public ArrayList<responseData> Response = new ArrayList<>();
    protected JSONObject config;
    protected String requestBaseURL;
    protected String APIKey;

    protected void getConfig(String type){ 
        config  = new Config().toJSONObject(type);
        requestBaseURL = config.getString("requestBaseURL");
        APIKey = config.getString("APIKey");
    }

    public JsonArray getJSONResponse(){
        Gson gson = new Gson();
        JsonElement element = gson.toJsonTree(Response, new TypeToken<List<responseData>>() {}.getType());
        return element.getAsJsonArray();
    }
}
