package com.example.backend.models;

import java.sql.Date;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class Ispit {
    private int id;
    private String sifra;
    private String student;
    @DateTimeFormat( iso = ISO.DATE)
    private Date datum;
    private int ocjena;
    
    public Ispit(int id, String sifra, String student, Date datum, int ocjena) {
        this.id = id;
        this.sifra = sifra;
        this.student = student;
        this.datum = datum;
        this.ocjena = ocjena;
    }

    

    public String getSifra() {
        return sifra;
    }
    public void setSifra(String sifra) {
        this.sifra = sifra;
    }
    public String getStudent() {
        return student;
    }
    public void setStudent(String student) {
        this.student = student;
    }
    public Date getDatum() {
        return datum;
    }
    public void setDatum(Date datum) {
        this.datum = datum;
    }
    public int getOcjena() {
        return ocjena;
    }
    public void setOcjena(int ocjena) {
        this.ocjena = ocjena;
    }



    public int getId() {
        return id;
    }



    public void setId(int id) {
        this.id = id;
    }

    
}
