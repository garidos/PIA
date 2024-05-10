package com.example.backend.models;

public class Automobil {
    private int id;
    private String marka;
    private int cena_registracije;
    public int getId() {
        return id;
    }
    public Automobil(int id, String marka, int cena_registracije) {
        this.id = id;
        this.marka = marka;
        this.cena_registracije = cena_registracije;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getMarka() {
        return marka;
    }
    public void setMarka(String marka) {
        this.marka = marka;
    }
    public int getCena_registracije() {
        return cena_registracije;
    }
    public void setCena_registracije(int cena_registracije) {
        this.cena_registracije = cena_registracije;
    }
    
}
