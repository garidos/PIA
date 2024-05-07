package com.example.backend.models;

public class Umetnina {
    private int id;
    private int idA;
    private String naziv;
    private int ponuda;
    private String vlasnik;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getIdA() {
        return idA;
    }
    public void setIdA(int idA) {
        this.idA = idA;
    }
    public String getNaziv() {
        return naziv;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public int getPonuda() {
        return ponuda;
    }
    public void setPonuda(int ponuda) {
        this.ponuda = ponuda;
    }
    public String getVlasnik() {
        return vlasnik;
    }
    public void setVlasnik(String vlasnik) {
        this.vlasnik = vlasnik;
    }
    public Umetnina(int id, int idA, String naziv, int ponuda, String vlasnik) {
        this.id = id;
        this.idA = idA;
        this.naziv = naziv;
        this.ponuda = ponuda;
        this.vlasnik = vlasnik;
    }
   
}
