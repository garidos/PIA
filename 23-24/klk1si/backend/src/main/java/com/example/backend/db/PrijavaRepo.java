package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PrijavaRepo implements IPrijavaRepo {

    @Override
    public boolean checkPrijava(String korisnicko_ime, int aktivnost_id) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from prijave where student=? and aktivnost=?")
        ) {
            stm.setString(1, korisnicko_ime);
            stm.setInt(2, aktivnost_id);
            ResultSet rs = stm.executeQuery();
            return rs.next() != false; 
        } catch( SQLException e) {
            e.printStackTrace();
        } 
        
        return false;
    }

    @Override
    public int addPrijava(String korisnicko_ime, int aktivnost_id, String sala) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("insert into prijave values(?, ?, ?)");
            PreparedStatement stm2 = conn.prepareStatement("update aktivnosti set " + sala + "=" + sala + "-1 where id=?")
        ) {
            stm.setString(1, korisnicko_ime);
            stm.setInt(2, aktivnost_id);
            stm.setString(3, sala);
            stm.executeUpdate();

            stm2.setInt(1, aktivnost_id);
            return stm2.executeUpdate();
        } catch( SQLException e) {  
            e.printStackTrace();
        } 
        
        return 0;
    }

}
