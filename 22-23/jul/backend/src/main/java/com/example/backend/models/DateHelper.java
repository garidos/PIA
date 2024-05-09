package com.example.backend.models;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

public class DateHelper {
    @DateTimeFormat( iso = ISO.TIME)
    private LocalDate datum_od;
    @DateTimeFormat( iso = ISO.TIME)
    private LocalDate datum_do;
    public LocalDate getDatum_od() {
        return datum_od;
    }
    public DateHelper(LocalDate datum_od, LocalDate datum_do) {
        this.datum_od = datum_od;
        this.datum_do = datum_do;
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
    
}
