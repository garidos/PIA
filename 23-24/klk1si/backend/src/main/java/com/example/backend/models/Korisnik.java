package com.example.backend.models;

public class Korisnik {
    private String ime;
    private String prezime;
    private String korisnicko_ime;
    private String lozinka;
    private String tip;
    
    public Korisnik(String ime, String prezime, String korisnicko_ime, String lozinka, String tip) {
        this.ime = ime;
        this.prezime = prezime;
        this.korisnicko_ime = korisnicko_ime;
        this.lozinka = lozinka;
        this.tip = tip;
    }
    public String getIme() {
        return ime;
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
    public String getKorisnicko_ime() {
        return korisnicko_ime;
    }
    public void setKorisnicko_ime(String korisnicko_ime) {
        this.korisnicko_ime = korisnicko_ime;
    }
    public String getLozinka() {
        return lozinka;
    }
    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }

    
}
