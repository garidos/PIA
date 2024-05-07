package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.Posao;

public class PosaoRepo implements IPosaoRepo {

    @Override
    public int addPosao(Posao p) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("insert into poslovi (dizajner, klijent, progres, objekat) values(?, ?, ?, ?)")
        ) {
            stm.setString(1, p.getDizajner());
            stm.setString(2, p.getKlijent());
            stm.setInt(3, p.getProgres());
            stm.setInt(4, p.getObjekat());
            return stm.executeUpdate();
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public Posao getPosaoByDizajner(String dizajner) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from poslovi where dizajner=?")
        ) {
            stm.setString(1, dizajner);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Posao p = new Posao(rs.getInt("idP"), rs.getString("dizajner"), rs.getString("klijent"), rs.getInt("progres"), rs.getInt("objekat"));
                return p;
            }
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int changeProgres(Posao posao, int kolicina) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("update poslovi set progres=progres+? where idP=?")
        ) {
            stm.setInt(1, kolicina);
            stm.setInt(2, posao.getId());
            return stm.executeUpdate();
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }

    @Override
    public int deletePosao(int id) {
        try ( Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("delete from poslovi where idP=?")
        ) {
           stm.setInt(1, id);
           return stm.executeUpdate();
        }
        catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return 0;
    }
    
}
