package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;

import com.example.backend.models.Umetnina;

public class UmetninaRepo implements IUmetninaRepo {

    @Override
    public ArrayList<Umetnina> getUmetnineByAukcija(int idA) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from umetnine where idA=?")
        ) {
            stm.setInt(1, idA);
            ResultSet rs = stm.executeQuery();
            ArrayList<Umetnina> umetnine = new ArrayList<>();
            while ( rs.next() ) {
                Umetnina u = new Umetnina(rs.getInt("idU"), rs.getInt("idA"), rs.getString("naziv"), rs.getInt("ponuda"), rs.getString("vlasnik"));
                umetnine.add(u);
            }
            return umetnine;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int addPonuda(Umetnina u) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("update umetnine set ponuda=?, vlasnik=? where idU=?")
        ) {
            stm.setInt(1, u.getPonuda());
            stm.setString(2, u.getVlasnik());
            stm.setInt(3, u.getId());
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public ArrayList<Umetnina> getKupljene(String vlasnik) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from umetnine join aukcije using(idA) where vlasnik=? and kraj<=?")
        ) {
            LocalDateTime date = LocalDateTime.now();
            stm.setTimestamp(2, Timestamp.valueOf(date));
            stm.setString(1, vlasnik);
            ResultSet rs = stm.executeQuery();
            ArrayList<Umetnina> umetnine = new ArrayList<>();
            while ( rs.next() ) {
                Umetnina u = new Umetnina(rs.getInt("idU"), rs.getInt("idA"), rs.getString("naziv"), rs.getInt("ponuda"), rs.getString("vlasnik"));
                umetnine.add(u);
            }
            return umetnine;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
    
}
