package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Zahtev;

public interface IZahtevRepo {
    public ArrayList<Zahtev> getZahteviByKlijent(String klijent);
    public ArrayList<Zahtev> getAllZahtevi();
    public int addZahtev(Zahtev z);
    public int prihvatiZahtev(Zahtev zahtev);
}
