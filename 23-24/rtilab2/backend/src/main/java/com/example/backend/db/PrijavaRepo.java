package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.Activity;

public class PrijavaRepo implements IPrijavaRepo {

    @Override
    public boolean checkPrijava(String username, Activity activity) {
        try( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * " + //
                                "from prijave p join aktivnosti a on(p.aktivnost=a.id) " + //
                                "where a.naziv=? and p.student=?")
        ) {
           stm.setString(2, username);
           stm.setString(1, activity.getName());
           ResultSet rs = stm.executeQuery();
           return !(rs.next() == false);
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return false;
    }

    @Override
    public int prijavi(String username, int activity, String sala) {
        try( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm1 = conn.prepareStatement("insert into prijave values(?, ?, ?)");
            PreparedStatement stm2 = conn.prepareStatement("update aktivnosti set " + sala + "=" + sala + " - 1 where id=?")
        ) {
           stm1.setString(1, username);
           stm1.setInt(2, activity);
           stm1.setString(3, sala);
           int res1 = stm1.executeUpdate();
          
           stm2.setInt(1, activity);
           int res2 = stm2.executeUpdate();
           if ( res1 > 0 && res2 > 0 ) return 1;
           else return 0;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }
    
}
