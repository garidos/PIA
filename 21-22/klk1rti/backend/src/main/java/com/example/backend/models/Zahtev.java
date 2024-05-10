package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class Zahtev {
    private int id;
    private String kupac;
    private int automobil;
    @DateTimeFormat(iso = ISO.DATE)
    private LocalDate datum;
    private int iznos;
    public int getId() {
        return id;
    }
    public Zahtev(int id, String kupac, int automobil, LocalDate datum, int iznos) {
        this.id = id;
        this.kupac = kupac;
        this.automobil = automobil;
        this.datum = datum;
        this.iznos = iznos;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getKupac() {
        return kupac;
    }
    public void setKupac(String kupac) {
        this.kupac = kupac;
    }
    public int getAutomobil() {
        return automobil;
    }
    public void setAutomobil(int automobil) {
        this.automobil = automobil;
    }
    public LocalDate getDatum() {
        return datum;
    }
    public void setDatum(LocalDate datum) {
        this.datum = datum;
    }
    public int getIznos() {
        return iznos;
    }
    public void setIznos(int iznos) {
        this.iznos = iznos;
    }

    
}
