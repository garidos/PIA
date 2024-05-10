package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Automobil;

public class AutoRepo implements IAutoRepo{

    @Override
    public Automobil getAutomobil(int id) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from automobili where idA=?")) {
            stm.setInt(1, id);
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                Automobil a = new Automobil(rs.getInt("idA"), rs.getString("marka"), rs.getInt("cena_registracije"));
                return a;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public ArrayList<Automobil> getAll() {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from automobili")) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Automobil> automobili = new ArrayList<>();
            while (rs.next()){
                Automobil a = new Automobil(rs.getInt("idA"), rs.getString("marka"), rs.getInt("cena_registracije"));
                automobili.add(a);
            }
            return automobili;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
