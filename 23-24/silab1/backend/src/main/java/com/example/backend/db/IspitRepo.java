package com.example.backend.db;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Ispit;

public class IspitRepo implements IIspitRepo{

    @Override
    public ArrayList<Ispit> getIspitiByDates(Date datumOd, Date datumDo) {
        try( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from ispiti where datum > ? and datum < ?")
        ) {
            stm.setDate(1, datumOd);
            stm.setDate(2, datumDo);
            ResultSet rs = stm.executeQuery();
            ArrayList<Ispit> ispiti = new ArrayList<>();
            while ( rs.next() ) {
                ispiti.add(new Ispit(rs.getInt("idI"), rs.getString("sifra"), rs.getString("student"), rs.getDate("datum"), rs.getInt("ocena")));
            }
            return ispiti;
        } catch( SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public ArrayList<Ispit> getIspitiByStudent(String indeks) {
        try( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from ispiti where student=?")
        ) {
            stm.setString(1, indeks);
            ResultSet rs = stm.executeQuery();
            ArrayList<Ispit> ispiti = new ArrayList<>();
            while ( rs.next() ) {
                ispiti.add(new Ispit(rs.getInt("idI"), rs.getString("sifra"), rs.getString("student"), rs.getDate("datum"), rs.getInt("ocena")));
            }
            return ispiti;
        } catch( SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int addispit(Ispit ispit) {
        try( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("update ispiti set datum=?, ocena=? where sifra=? and student=?")
        ) {
            stm.setDate(1, ispit.getDatum());
            stm.setInt(2, ispit.getOcjena());
            stm.setString(3, ispit.getSifra());
            stm.setString(4, ispit.getStudent());
            int res = stm.executeUpdate();
            if ( res == 0 ) {
                try( Connection conn2 = DB.source().getConnection();
                    PreparedStatement stm2 = conn.prepareStatement("insert into ispiti (sifra, student, datum, ocena) values (?, ?, ?, ?)")
                ) {
                    stm2.setString(1, ispit.getSifra());
                    stm2.setString(2, ispit.getStudent());
                    stm2.setDate(3, ispit.getDatum());
                    stm2.setInt(4, ispit.getOcjena());
                    return stm2.executeUpdate();
                } catch( SQLException e) {
                    e.printStackTrace();
                }
            }
            return res;
        } catch( SQLException e) {
            e.printStackTrace();
        }

        return -1;
    }
    
}
