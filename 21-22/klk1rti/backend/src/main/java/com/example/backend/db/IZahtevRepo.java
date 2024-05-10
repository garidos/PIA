package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Zahtev;

public interface IZahtevRepo {
    public ArrayList<Zahtev> getAll();
    public int deleteZahtev(int id);
    public int addZahtev(Zahtev zahtev);
}
