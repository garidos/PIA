package com.example.backend.models;

public class Student {
    private String ime;
    private String prezime;
    private int godina;
    private String indeks;
    
    public Student(String ime, String prezime, int godina, String indeks) {
        this.ime = ime;
        this.prezime = prezime;
        this.godina = godina;
        this.indeks = indeks;
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
    public int getGodina() {
        return godina;
    }
    public void setGodina(int godina) {
        this.godina = godina;
    }
    public String getIndeks() {
        return indeks;
    }
    public void setIndeks(String indeks) {
        this.indeks = indeks;
    }

    

}
