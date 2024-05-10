package com.example.backend.db;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Zahtev;

public class ZahtevRepo implements IZahtevRepo{

    @Override
    public ArrayList<Zahtev> getAll() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from zahtevi")) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Zahtev> zahtevi = new ArrayList<>();
            while (rs.next()){
                Zahtev z = new Zahtev(rs.getInt("idZ"), rs.getString("kupac"), rs.getInt("automobil"), rs.getDate("datum").toLocalDate(), rs.getInt("iznos"));
                zahtevi.add(z);
            }
            return zahtevi;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public int deleteZahtev(int id) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("delete from zahtevi where idZ=?")) {
            stm.setInt(1, id);
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }

    @Override
    public int addZahtev(Zahtev zahtev) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("insert into zahtevi (kupac, automobil, datum, iznos) values(?, ?, ?, ?)")) {
            stm.setString(1, zahtev.getKupac());
            stm.setInt(2, zahtev.getAutomobil());
            stm.setDate(3, Date.valueOf(zahtev.getDatum()));
            stm.setInt(4, zahtev.getIznos());
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return 0;
    }
    
}
