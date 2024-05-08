package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Korisnik;

public interface IKorisnikRepo {
    public Korisnik login(String kor_ime, String lozinka, String tip);
    public ArrayList<Korisnik> getClanoviTima(int tim);
}
