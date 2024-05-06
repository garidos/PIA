package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class SalaRepo implements ISalaRepo {

    @Override
    public int getBrojMjesta(int sala) {
        try (Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from sale where naziv=?");
        ) {
            stm.setString(1, "Sala"+sala);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                return rs.getInt("broj_mesta");
            }
            return -1;
        } catch( SQLException e) {  
            e.printStackTrace();
        } 
        
        return -1;
    }
    
}
