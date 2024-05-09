package com.example.backend.models;

public class Hala {
    private String naziv;
    private int kapacitet;
    public String getNaziv() {
        return naziv;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public Hala(String naziv, int kapacitet) {
        this.naziv = naziv;
        this.kapacitet = kapacitet;
    }
    public int getKapacitet() {
        return kapacitet;
    }
    public void setKapacitet(int kapacitet) {
        this.kapacitet = kapacitet;
    }
    
}
