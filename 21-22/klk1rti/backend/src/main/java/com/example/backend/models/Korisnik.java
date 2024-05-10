package com.example.backend.models;

public class Korisnik {
    private String ime;
    private String prezime;
    private String korisnicko_ime;
    private String lozinka;
    private String tip;

    public Korisnik(String firstname, String lastname, String username, String password, String type) {
        this.ime = firstname;
        this.prezime = lastname;
        this.korisnicko_ime = username;
        this.lozinka = password;
        this.tip = type;
    }
    
    public String getKorisnicko_ime() {
        return korisnicko_ime;
    }
    public void setKorisnicko_ime(String username) {
        this.korisnicko_ime = username;
    }
    public String getLozinka() {
        return lozinka;
    }
    public void setLozinka(String password) {
        this.lozinka = password;
    }
    public String getIme() {
        return ime;
    }
    public void setIme(String firstname) {
        this.ime = firstname;
    }
    public String getPrezime() {
        return prezime;
    }
    public void setPrezime(String lastname) {
        this.prezime = lastname;
    }
    public String getTip() {
        return tip;
    }
    public void setTip(String type) {
        this.tip = type;
    }

    
}
