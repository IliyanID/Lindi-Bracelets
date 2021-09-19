package com.tco.misc;
import java.io.*;
import org.json.JSONArray;
import org.json.JSONObject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Config {
    private JSONArray obj = null;
    private final Logger log = LoggerFactory.getLogger(Config.class);

    public Config(){
        ReadConfig();
    }

    public void WriteConfig(JSONArray newConfig){
        String configFile = new File("").getAbsolutePath() + "/APIconfig.json";

        FileWriter fw = null;
        try{
            fw = new FileWriter(new File(configFile),false); 
            fw.write(newConfig.toString());
            log.info("Wrote new config to file: " + configFile);
        }catch(Exception e){
            e.printStackTrace();
        }finally{
            try{fw.close();}catch(Exception f){f.printStackTrace();};
        }
    }

    public void ReadConfig() {
        String configPath = getRootDirectory() + "/Back-End/src/main/resources/APIconfig.json";
        try (BufferedReader br = new BufferedReader(new FileReader(configPath))) {
            String objStr = "";
            String line;
            while ((line = br.readLine()) != null) {
                objStr += line;
            }
            obj = new JSONArray(objStr);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public JSONArray toJSONArray(){
        return obj;
    }

    public JSONObject toJSONObject(String requestName) {
        for(int i = 0; i < obj.length(); i++){
            JSONObject config = obj.getJSONObject(i);
            //System.out.println("config: \"" + config.getString("requestName") + "\"");
            //System.out.println("requestName: \"" + requestName + "\"");
            if(config.getString("requestName").equals(requestName))
                return config;
            
        }

        return null;

    }

    public String getRootDirectory(){
        String dir = new File("").getAbsolutePath();
        //System.out.println(dir);
        String rootGoal = "Lindi-Bracelets";
        while(!dir.substring(dir.length() - rootGoal.length()).equals(rootGoal)){
            //System.out.println(dir.substring(dir.length() - rootGoal.length()));
            dir = new File(dir).getParent();
        }
        log.info("Root Directory is: " + dir);
        return dir;
    }
}
