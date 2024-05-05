package com.example.backend.models;

public class Activity {
    private int id;
    private String name;
    private String dateTime;
    private String author;
    private int status;
    private int sala1;
    private int sala2;
    private int sala3;
    
    public Activity(int id, String name, String dateTime, String author, int status, int sala1, int sala2, int sala3) {
        this.id = id;
        this.name = name;
        this.dateTime = dateTime;
        this.author = author;
        this.status = status;
        this.sala1 = sala1;
        this.sala2 = sala2;
        this.sala3 = sala3;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getDateTime() {
        return dateTime;
    }
    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }
    public String getAuthor() {
        return author;
    }
    public void setAuthor(String author) {
        this.author = author;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public int getSala1() {
        return sala1;
    }
    public void setSala1(int sala1) {
        this.sala1 = sala1;
    }
    public int getSala2() {
        return sala2;
    }
    public void setSala2(int sala2) {
        this.sala2 = sala2;
    }
    public int getSala3() {
        return sala3;
    }
    public void setSala3(int sala3) {
        this.sala3 = sala3;
    }


    
}
