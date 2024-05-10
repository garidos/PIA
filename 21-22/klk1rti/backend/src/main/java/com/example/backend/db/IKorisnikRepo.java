package com.example.backend.db;

import com.example.backend.models.Korisnik;

public interface IKorisnikRepo {
    public Korisnik login(Korisnik u);
}
