package com.example.backend.db;

public interface IPrijavaRepo {
    public boolean checkPrijava(String korisnicko_ime, int aktivnost_id);
    public int addPrijava(String korisnicko_ime, int aktivnost_id, String sala);
}
