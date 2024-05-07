package com.example.backend.db;

import com.example.backend.models.Posao;

public interface IPosaoRepo {
    public int addPosao(Posao p);
    public Posao getPosaoByDizajner(String dizajner);
    public int changeProgres(Posao p, int kolicina);
    public int deletePosao(int id);
} 
