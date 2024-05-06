package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Aktivnost;

public class AktivnostRepo implements IAktivnostRepo {

    @Override
    public ArrayList<Aktivnost> getAktuelne() {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from aktivnosti where status=1")
        ) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Aktivnost> aktivnosti = new ArrayList<>();
            while( rs.next() ) {
                Aktivnost aktivnost = new Aktivnost(rs.getInt("id"), rs.getString("naziv"), rs.getString("datum_vreme"), rs.getString("napravio"),
                 rs.getInt("status"), rs.getInt("sala1"), rs.getInt("sala2"), rs.getInt("sala3"));
                 aktivnosti.add(aktivnost);
            }
            return aktivnosti;
        } catch( SQLException e) {
            e.printStackTrace();
        } 

        return null;
    }

    @Override
    public ArrayList<Aktivnost> getAktivnostiByAutor(String korisnicko_ime) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from aktivnosti where napravio=?")
        ) {
            stm.setString(1, korisnicko_ime);
            ResultSet rs = stm.executeQuery();
            ArrayList<Aktivnost> aktivnosti = new ArrayList<>();
            while( rs.next() ) {
                Aktivnost aktivnost = new Aktivnost(rs.getInt("id"), rs.getString("naziv"), rs.getString("datum_vreme"), rs.getString("napravio"),
                 rs.getInt("status"), rs.getInt("sala1"), rs.getInt("sala2"), rs.getInt("sala3"));
                 aktivnosti.add(aktivnost);
            }
            return aktivnosti;
        } catch( SQLException e) {
            e.printStackTrace();
        } 

        return null;
    }

    @Override
    public int changeStatus(int id, int status) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("update aktivnosti set status=? where id=?")
        ) {
            stm.setInt(1, status);
            stm.setInt(2, id);
            return  stm.executeUpdate();
        } catch( SQLException e) {
            e.printStackTrace();
        } 

        return 0;
    }

    @Override
    public int dodajAktivnost(Aktivnost aktivnost) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm =
             conn.prepareStatement("insert into aktivnosti (naziv, datum_vreme, napravio, status, Sala1, Sala2, Sala3) values(?, ?, ?, ?, ?, ?, ?)")
        ) {
            stm.setString(1, aktivnost.getNaziv());
            stm.setString(2, aktivnost.getDatum_vreme());
            stm.setString(3, aktivnost.getNapravio());
            stm.setInt(4, aktivnost.getStatus());
            stm.setInt(5, aktivnost.getSala1());
            stm.setInt(6, aktivnost.getSala2());
            stm.setInt(7, aktivnost.getSala3());
            return  stm.executeUpdate();
        } catch( SQLException e) {
            e.printStackTrace();
        } 

        return 0;
    }
    
}
