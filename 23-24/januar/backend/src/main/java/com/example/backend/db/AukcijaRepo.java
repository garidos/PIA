package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.ArrayList;

import com.example.backend.models.Aukcija;

public class AukcijaRepo implements IAukcijaRepo{

    @Override
    public ArrayList<Aukcija> getOtvorene() {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from aukcije where pocetak<=? and kraj>? order by kraj")
        ) {
            LocalDateTime date = LocalDateTime.now();
            stm.setTimestamp(1, Timestamp.valueOf(date));
            stm.setTimestamp(2, Timestamp.valueOf(date));
            ResultSet rs = stm.executeQuery();
            ArrayList<Aukcija> aukcije = new ArrayList<>();
            while ( rs.next() ) {
                Aukcija a = new Aukcija(rs.getInt("idA"),rs.getString("naziv"), rs.getTimestamp("pocetak").toLocalDateTime() , rs.getTimestamp("kraj").toLocalDateTime() );
                aukcije.add(a);
            }
            return aukcije;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public ArrayList<Aukcija> getAll() {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from aukcije")
        ) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Aukcija> aukcije = new ArrayList<>();
            while ( rs.next() ) {
                Aukcija a = new Aukcija(rs.getInt("idA"),rs.getString("naziv"), rs.getTimestamp("pocetak").toLocalDateTime() , rs.getTimestamp("kraj").toLocalDateTime() );
                aukcije.add(a);
            }
            return aukcije;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
    
}
