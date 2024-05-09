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
    public int addZahtev(Zahtev z) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("insert into zahtevi (naziv, datum_od, datum_do, broj_ljudi, hala, status, klijent) values(?, ?, ?, ?, ?, ?, ?)")
        ) {
           stm.setString(1, z.getNaziv());
           stm.setDate(2, Date.valueOf(z.getDatum_od()));
           stm.setDate(3, Date.valueOf(z.getDatum_do()));
           if ( z.getBroj_ljudi() == 0 ) {
            stm.setNull(4, 0);
           } else {
            stm.setInt(4, z.getBroj_ljudi());
           }
           stm.setString(5, z.getHala());
           stm.setString(6, z.getStatus());
           stm.setString(7, z.getKlijent());
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public ArrayList<Zahtev> getZahteviByKlijent(String klijent) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from zahtevi where datum_od >='2023-07-20' and klijent=?")
        ) {
            stm.setString(1, klijent);
            //stm.setDate(1, Date.valueOf(LocalDate.now()));
            ResultSet rs = stm.executeQuery();
            ArrayList<Zahtev> zahtevi = new ArrayList<>();
            while ( rs.next() ) {
                Zahtev z = new Zahtev(rs.getInt("idZ"), rs.getString("naziv"), rs.getDate("datum_od").toLocalDate(), rs.getDate("datum_do").toLocalDate(), rs.getInt("broj_ljudi"), rs.getString("hala"), rs.getString("status"), rs.getString("klijent"));
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
    public ArrayList<Zahtev> getAllZahtevi() {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from zahtevi")
        ) {
            ResultSet rs = stm.executeQuery();
            ArrayList<Zahtev> zahtevi = new ArrayList<>();
            while ( rs.next() ) {
                Zahtev z = new Zahtev(rs.getInt("idZ"), rs.getString("naziv"), rs.getDate("datum_od").toLocalDate(), rs.getDate("datum_do").toLocalDate(), rs.getInt("broj_ljudi"), rs.getString("hala"), rs.getString("status"), rs.getString("klijent"));
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
    public int prihvatiZahtev(Zahtev zahtev) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("update zahtevi set status='Prihvaceno' where idZ=?");
            PreparedStatement stm2 = conn.prepareStatement("update zahtevi set status='Odbijeno' where hala=? and status='U obradi' and not ( datum_od<? and datum_do<? or datum_od>? and datum_do>? )" )
        ) {
            stm.setInt(1, zahtev.getId());
            int res = stm.executeUpdate();

            stm2.setString(1, zahtev.getHala());
            stm2.setDate(2, Date.valueOf(zahtev.getDatum_od()));
            stm2.setDate(3, Date.valueOf(zahtev.getDatum_od()));
            stm2.setDate(4, Date.valueOf(zahtev.getDatum_do()));
            stm2.setDate(5, Date.valueOf(zahtev.getDatum_do()));
            return res + stm2.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }
}
