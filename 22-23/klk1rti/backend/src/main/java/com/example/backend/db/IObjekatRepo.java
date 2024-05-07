package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Objekat;

public interface IObjekatRepo {
    public ArrayList<Objekat> getObjektiByKlijent(String kor_ime);   
    public int changeStanje(Objekat o, String stanje);
    public Objekat getObjekatById(int id);
}
