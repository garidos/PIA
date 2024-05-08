package com.example.backend.models;

public class Korisnik {
    private String korisnicko_ime;
    private String lozinka;
    private String ime;
    private String prezime;
    private String tip;
    private int tim;

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
    public String getTip() {
        return tip;
    }
    public void setTip(String tip) {
        this.tip = tip;
    }
    public int getTim() {
        return tim;
    }
    public void setTim(int tim) {
        this.tim = tim;
    }

    public Korisnik(String korisnicko_ime, String lozinka, String ime, String prezime, String tip, int tim) {
        this.korisnicko_ime = korisnicko_ime;
        this.lozinka = lozinka;
        this.ime = ime;
        this.prezime = prezime;
        this.tip = tip;
        this.tim = tim;
    }
}
