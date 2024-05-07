package com.example.backend.db;

import java.util.ArrayList;

import com.example.backend.models.Umetnina;

public interface IUmetninaRepo {
    public ArrayList<Umetnina> getUmetnineByAukcija(int idA);
    public int addPonuda(Umetnina u );
    public ArrayList<Umetnina> getKupljene(String vlasnik);
}
