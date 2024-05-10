package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.Korisnik;

public class KorisnikRepo implements IKorisnikRepo {

    @Override
    public Korisnik login(Korisnik u) {
        try (Connection conn = DB.source().getConnection();
        PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?")) {
            stm.setString(1, u.getKorisnicko_ime());
            stm.setString(2, u.getLozinka());
            stm.setString(3, u.getTip());
            ResultSet rs = stm.executeQuery();
            if(rs.next()){
                Korisnik newUser = new Korisnik(rs.getString("ime"),
                rs.getString("prezime"), rs.getString("korisnicko_ime"),
                rs.getString("lozinka"), rs.getString("tip") );
                return newUser;
            }
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        return null;
    }
    
}
