package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Korisnik;

public class KorisnikRepo implements IKorisnikRepo {

    @Override
    public Korisnik login(String kor_ime, String lozinka, String tip) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where kor_ime=? and lozinka=? and tip=?")
        ) {
            stm.setString(1, kor_ime);
            stm.setString(2, lozinka);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Korisnik k = new Korisnik(rs.getString("kor_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("mejl"), rs.getString("tip"));
                return k;
            }
        }
         catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public ArrayList<Korisnik> getSlobodniDizajneri() {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where tip='dizajner' and kor_ime not in ( select dizajner from poslovi )")
        ) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Korisnik> dizajneri = new ArrayList<>();
            while ( rs.next() ) {
                Korisnik k = new Korisnik(rs.getString("kor_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("mejl"), rs.getString("tip"));
                dizajneri.add(k);
            }
            return dizajneri;
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public Korisnik getKorisnikByKorIme(String kor_ime) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where kor_ime=?")
        ) {
            stm.setString(1, kor_ime);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Korisnik k = new Korisnik(rs.getString("kor_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("mejl"), rs.getString("tip"));
                return k;
            }
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
    
}
