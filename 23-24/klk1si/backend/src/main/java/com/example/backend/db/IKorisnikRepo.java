package com.example.backend.db;

import com.example.backend.models.Korisnik;

public interface IKorisnikRepo {
    public Korisnik login(String korisnicko_ime, String lozinka, String tip);
}
