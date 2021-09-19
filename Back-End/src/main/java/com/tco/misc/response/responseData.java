package com.tco.misc.response;

public class responseData {
    private String link;
    private String description;
    private String page;
    private int id;

    public responseData(String link, String description, String page, int id){
        this.link = link;
        this.description = description;
        this.page = page;
        this.id = id;
    }

    public String getlink() {
        return this.link;
    }

    public void setlink(String link) {
        this.link = link;
    }

    public String getdescription() {
        return this.description;
    }

    public void setdescription(String description) {
        this.description = description;
    }

    public String getpage() {
        return this.page;
    }

    public void setpage(String page) {
        this.page = page;
    }

    public int getid() {
        return this.id;
    }

    public void setid(int id) {
        this.id = id;
    }
}
