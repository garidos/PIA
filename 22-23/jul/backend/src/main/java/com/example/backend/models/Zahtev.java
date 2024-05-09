package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class Zahtev {
    private int id;
    private String naziv;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum_od;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum_do;
    private int broj_ljudi;
    private String hala;
    private String status;
    private String klijent;
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getNaziv() {
        return naziv;
    }
    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }
    public LocalDate getDatum_od() {
        return datum_od;
    }
    public void setDatum_od(LocalDate datum_od) {
        this.datum_od = datum_od;
    }
    public LocalDate getDatum_do() {
        return datum_do;
    }
    public void setDatum_do(LocalDate datum_do) {
        this.datum_do = datum_do;
    }
    public int getBroj_ljudi() {
        return broj_ljudi;
    }
    public void setBroj_ljudi(int broj_ljudi) {
        this.broj_ljudi = broj_ljudi;
    }
    public String getHala() {
        return hala;
    }
    public void setHala(String hala) {
        this.hala = hala;
    }
    public String getStatus() {
        return status;
    }
    public void setStatus(String status) {
        this.status = status;
    }
    public String getKlijent() {
        return klijent;
    }
    public void setKlijent(String klijent) {
        this.klijent = klijent;
    }
    public Zahtev(int id, String naziv, LocalDate datum_od, LocalDate datum_do, int broj_ljudi, String hala,
            String status, String klijent) {
        this.id = id;
        this.naziv = naziv;
        this.datum_od = datum_od;
        this.datum_do = datum_do;
        this.broj_ljudi = broj_ljudi;
        this.hala = hala;
        this.status = status;
        this.klijent = klijent;
    }


    
}
