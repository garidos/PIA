package com.example.backend.models;

public class Objekat {

    private int id;
    private String tip;
    private String adresa;
    private int prostorije;
    private int kvadratura;
    private String stanje;
    private String klijent;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public String getAdresa() {
        return adresa;
    }
    public void setAdresa(String adresa) {
        this.adresa = adresa;
    }
    public int getProstorije() {
        return prostorije;
    }
    public void setProstorije(int prostorije) {
        this.prostorije = prostorije;
    }
    public int getKvadratura() {
        return kvadratura;
    }
    public void setKvadratura(int kvadratura) {
        this.kvadratura = kvadratura;
    }
    public String getStanje() {
        return stanje;
    }
    public void setStanje(String stanje) {
        this.stanje = stanje;
    }
    public String getKlijent() {
        return klijent;
    }
    public void setKlijent(String klijent) {
        this.klijent = klijent;
    }
    public Objekat(int id, String tip, String adresa, int prostorije, int kvadratura, String stanje, String klijent) {
        this.id = id;
        this.tip = tip;
        this.adresa = adresa;
        this.prostorije = prostorije;
        this.kvadratura = kvadratura;
        this.stanje = stanje;
        this.klijent = klijent;
    }
    
}
