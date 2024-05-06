package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Aktivnost;

public interface IAktivnostRepo {
    public ArrayList<Aktivnost> getAktuelne();
    public ArrayList<Aktivnost> getAktivnostiByAutor(String korisnicko_ime);
    public int changeStatus(int id, int stauts);
    public int dodajAktivnost(Aktivnost aktivnost);
}
