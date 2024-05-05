package com.example.backend.db;

import java.sql.Date;
import java.util.ArrayList;

import com.example.backend.models.Ispit;

public interface IIspitRepo {
    public ArrayList<Ispit> getIspitiByDates(Date datumOd, Date datumDo);
    public ArrayList<Ispit> getIspitiByStudent(String indeks);
    public int addispit(Ispit ispit);
}
