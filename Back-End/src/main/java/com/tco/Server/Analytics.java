package com.tco.Server;
import java.util.ArrayList;
import java.time.format.DateTimeFormatter;  
import java.time.LocalDateTime; 


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class Analytics {
    private final Logger log = LoggerFactory.getLogger(Analytics.class);

    private int NumOfInstaRequests = 0;
    private int NumOfEtsyRequests = 0;


    public ArrayList<String> userAgents = new ArrayList<>();
    public ArrayList<String> ips = new ArrayList<>();
    public ArrayList<String> times = new ArrayList<>();

    public String returnHTML(){
        int hour = 0,day = 0,week = 0,month = 0;

        LocalDateTime now = LocalDateTime.now();  

        for(int i = 0; i < times.size(); i++){
            log.info(times.get(i));
            LocalDateTime input =  LocalDateTime.parse(times.get(i).replace("/","-").replace(" ","T"));
            if(input.plusHours(1).isAfter(now))
                hour++;
            if(input.plusDays(1).isAfter(now))
                day++;
            if(input.plusWeeks(1).isAfter(now))
                week++;
            if(input.plusMonths(1).isAfter(now))
                month++;
        }

        String response= 
        "Number of Total Visits: " + Math.min(NumOfEtsyRequests,NumOfInstaRequests) + "<br/>"+
        "Number of Total Requests for Etsy Images: " + NumOfEtsyRequests + "<br/>"+
        "Number of Total Requests for Instagram Images: " + NumOfInstaRequests + "<br/>" + "<br/>"+
        "Number of Vists in last hour: " + hour +"<br/>" +
        "Number of Vists in last day: "+ day + "<br/>" +
        "Number of Vists in last week: "+ week + "<br/>" +
        "Number of Vists in last month: "+ month + "<br/>" +
        "<br/><br/><br/><br/>"+
        "Latest 10 People to Access: " + "<br/><br/>";

        int max = 0;
        for(int i = userAgents.size() - 1;i >= 0;i--){
            if(max >=10)
                break;
            else    
                max++;

            response += (
                "User-Agent: " + userAgents.get(i)+"<br/>"+
                "IP: " + ips.get(i) + "<br/>"+
                "Time Accessed At: " + times.get(i) + "<br/><br/>"
            );
        }
        return response;
    }

    public void newEtsyRequest(String userAgent, String ip){
        userAgents.add(userAgent);
        ips.add(ip);

        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");  
        LocalDateTime now = LocalDateTime.now();  
        times.add(dtf.format(now));

        NumOfEtsyRequests++;

        log.info("New Request");
        log.info("User Agent: + " + userAgent);
        log.info("IP: " + ip);
        log.info("Time: " + dtf.format(now));
         
    }
    public void newInstaRequest(){
        NumOfInstaRequests++;
    }
}
