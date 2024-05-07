package com.example.backend.models;

public class Posao {
    private int id;
    private String dizajner;
    private String klijent;
    private int progres;
    private int objekat;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getDizajner() {
        return dizajner;
    }
    public void setDizajner(String dizajner) {
        this.dizajner = dizajner;
    }
    public String getKlijent() {
        return klijent;
    }
    public void setKlijent(String klijent) {
        this.klijent = klijent;
    }
    public int getProgres() {
        return progres;
    }
    public void setProgres(int progres) {
        this.progres = progres;
    }
    public int getObjekat() {
        return objekat;
    }
    public void setObjekat(int objekat) {
        this.objekat = objekat;
    }
    public Posao(int id, String dizajner, String klijent, int progres, int objekat) {
        this.id = id;
        this.dizajner = dizajner;
        this.klijent = klijent;
        this.progres = progres;
        this.objekat = objekat;
    }

    
}
