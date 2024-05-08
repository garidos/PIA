package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Zadatak;

public class ZadatakRepo implements IZadatakRepo {
    
    @Override
    public int addZadatak(Zadatak zadatak) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("insert into zadaci (sadrzaj, obavljen, tip, dodeljen) values(?, ?, ?, ?)")
        ) {
            stm.setString(1, zadatak.getSadrzaj());
            stm.setInt(2, (zadatak.getObavljen()==true?1:0));
            stm.setString(3, zadatak.getTip());
            stm.setString(4, zadatak.getDodeljen());
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public ArrayList<Zadatak> getZadciByClan(String kor_ime) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from zadaci where dodeljen=?")
        ) {
            stm.setString(1, kor_ime);
            ResultSet rs = stm.executeQuery();
            ArrayList<Zadatak> zadaci = new ArrayList<>();
            while ( rs.next() ) {
                Zadatak z = new Zadatak(rs.getInt("id"), rs.getString("sadrzaj"), (rs.getInt("obavljen")==1), rs.getString("tip"), rs.getString("dodeljen"));
                zadaci.add(z);
            }
            return zadaci;
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int deleteZadatak(int id) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("delete from zadaci where id=?")
        ) {
            stm.setInt(1, id);
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public int updateZadatak(Zadatak zadatak) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("update zadaci set obavljen=? where id=?")
        ) {
            stm.setInt(2, zadatak.getId());
            stm.setInt(1, (zadatak.getObavljen()==true?1:0));
            return stm.executeUpdate();
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }
}
