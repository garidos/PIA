package com.example.backend.models;

import java.time.LocalDateTime;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class Aukcija {
    private int id;
    private String naziv;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private LocalDateTime pocetak;
    @DateTimeFormat(iso = ISO.DATE_TIME)
    private LocalDateTime kraj;
    public String getNaziv() {
        return naziv;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public LocalDateTime getPocetak() {
        return pocetak;
    }
    public void setPocetak(LocalDateTime pocetak) {
        this.pocetak = pocetak;
    }
    public LocalDateTime getKraj() {
        return kraj;
    }
    public void setKraj(LocalDateTime kraj) {
        this.kraj = kraj;
    }
    public Aukcija(int id, String naziv, LocalDateTime pocetak, LocalDateTime kraj) {
        this.id = id;
        this.naziv = naziv;
        this.pocetak = pocetak;
        this.kraj = kraj;
    }

    
}
