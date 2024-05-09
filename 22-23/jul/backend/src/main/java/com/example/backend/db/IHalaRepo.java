package com.example.backend.db;

import java.time.LocalDate;
import java.util.ArrayList;

import com.example.backend.models.Hala;

public interface IHalaRepo {
    public ArrayList<Hala> getSlobodneHale(LocalDate datumOd, LocalDate datumDo, int broj_ljudi);
}
