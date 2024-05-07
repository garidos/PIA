package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Aukcija;

public interface IAukcijaRepo {
    public ArrayList<Aukcija> getOtvorene();
    public ArrayList<Aukcija> getAll();
}
