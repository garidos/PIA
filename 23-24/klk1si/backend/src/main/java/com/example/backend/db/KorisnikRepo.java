package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.Korisnik;

public class KorisnikRepo implements IKorisnikRepo{

    @Override
    public Korisnik login(String korisnicko_ime, String lozinka, String tip) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?")
        ) {
            stm.setString(1, korisnicko_ime);
            stm.setString(2, lozinka);
            stm.setString(3, tip);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Korisnik korisnik = new Korisnik(rs.getString("ime"), rs.getString("prezime"), rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("tip"));           
                return korisnik;
            }   
        } catch( SQLException e) {
            e.printStackTrace();
        } 

        return null;
    }
    
}
