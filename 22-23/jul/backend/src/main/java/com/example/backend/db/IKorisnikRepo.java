package com.example.backend.db;

import com.example.backend.models.Korisnik;

public interface IKorisnikRepo {
    public Korisnik login(String kor_ime, String lozinka, String tip);
    public Korisnik getKorisnik(String kor_ime);
}
