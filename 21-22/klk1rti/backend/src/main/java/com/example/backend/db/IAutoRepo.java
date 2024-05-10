package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Automobil;

public interface IAutoRepo {
    public Automobil getAutomobil(int id);
    public ArrayList<Automobil> getAll();
}
