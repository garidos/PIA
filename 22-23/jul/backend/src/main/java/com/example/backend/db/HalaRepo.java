package com.example.backend.db;

import java.sql.Connection;
import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.ArrayList;

import com.example.backend.models.Hala;

public class HalaRepo implements IHalaRepo {
    @Override
    public ArrayList<Hala> getSlobodneHale(LocalDate datumOd, LocalDate datumDo, int broj_ljudi) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from hale h where kapacitet >= ? and not exists ( select * from zahtevi where status='Prihvaceno' and h.naziv=hala and not (? < datum_od and ? < datum_od or ? > datum_do and ? > datum_do))")
        ) {
           stm.setInt(1, broj_ljudi);
           stm.setDate(2, Date.valueOf(datumOd));
           stm.setDate(3, Date.valueOf(datumDo));
           stm.setDate(4, Date.valueOf(datumOd));
           stm.setDate(5, Date.valueOf(datumDo));
            ResultSet rs = stm.executeQuery();
            ArrayList<Hala> hale = new ArrayList<>();
            while ( rs.next() ) {
                Hala h = new Hala(rs.getString("naziv"), rs.getInt("kapacitet"));
                hale.add(h);
            }
            return hale;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }
}
