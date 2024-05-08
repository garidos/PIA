package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Zadatak;

public interface IZadatakRepo {
    public int addZadatak(Zadatak zadatak);
    public ArrayList<Zadatak> getZadciByClan(String kor_ime);
    public int deleteZadatak(int id);
    public int updateZadatak(Zadatak zadatak);
}
