package com.example.backend.models;

public class Korisnik {
    private String ime;
    private String prezime;
    private String kor_ime;
    private String lozinka;
    private String mejl;
    private String tip;
    public String getIme() {
        return ime;
    }
    public Korisnik(String ime, String prezime, String kor_ime, String lozinka, String mejl, String tip) {
        this.ime = ime;
        this.prezime = prezime;
        this.kor_ime = kor_ime;
        this.lozinka = lozinka;
        this.mejl = mejl;
        this.tip = tip;
    }
    public void setIme(String ime) {
        this.ime = ime;
    }
    public String getPrezime() {
        return prezime;
    }
    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }
    public String getKor_ime() {
        return kor_ime;
    }
    public void setKor_ime(String kor_ime) {
        this.kor_ime = kor_ime;
    }
    public String getLozinka() {
        return lozinka;
    }
    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }
    public String getMejl() {
        return mejl;
    }
    public void setMejl(String mejl) {
        this.mejl = mejl;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }

    
}
