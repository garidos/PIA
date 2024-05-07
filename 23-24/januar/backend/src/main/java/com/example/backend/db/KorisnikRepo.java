package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Korisnik;

public class KorisnikRepo implements IKorisnikRepo{

    @Override
    public Korisnik login(String ime, String lozinka, String tip) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?")
        ) {
            stm.setString(1, ime);
            stm.setString(2, lozinka);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Korisnik k = new Korisnik(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"),
                rs.getString("prezime") , rs.getString("mejl"), rs.getString("tip"));
                return k;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public ArrayList<Korisnik> getAll() {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from korisnici")
        ) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Korisnik> korisnici = new ArrayList<>();
            while ( rs.next() ) {
                Korisnik k = new Korisnik(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"),
                rs.getString("prezime") , rs.getString("mejl"), rs.getString("tip"));
                korisnici.add(k);
            }
            return korisnici;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
    
}
