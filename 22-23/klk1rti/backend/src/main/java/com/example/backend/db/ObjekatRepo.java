package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Objekat;

public class ObjekatRepo implements IObjekatRepo{

    @Override
    public ArrayList<Objekat> getObjektiByKlijent(String kor_ime) {
         try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from objekti where klijent=?")
        ) {
            stm.setString(1, kor_ime);
            ResultSet rs = stm.executeQuery();
            ArrayList<Objekat> objekti = new ArrayList<>();
            while ( rs.next() ) {
                Objekat o = new Objekat(rs.getInt("idO"), rs.getString("tip"), rs.getString("adresa"), rs.getInt("prostorije"),
                 rs.getInt("kvadratura"), rs.getString("stanje"), rs.getString("klijent"));
                objekti.add(o);
            }
            return objekti;
        }
         catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int changeStanje(Objekat o, String stanje) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("update objekti set stanje=? where idO=?")
        ) {
            stm.setString(1, stanje);
            stm.setInt(2, o.getId());
            return stm.executeUpdate();
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public Objekat getObjekatById(int id) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from objekti where idO=?")
        ) {
            stm.setInt(1, id);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Objekat o = new Objekat(rs.getInt("idO"), rs.getString("tip"), rs.getString("adresa"), rs.getInt("prostorije"),
                rs.getInt("kvadratura"), rs.getString("stanje"), rs.getString("klijent"));
                return o;
            }
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

}
