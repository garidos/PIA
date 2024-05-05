package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.backend.models.User;

public class UserRepo implements IUserRepo {

    @Override
    public User login(User u) {
        try( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from korisnici where korisnicko_ime=? and lozinka=? and tip=?")
        ) {
           stm.setString(1, u.getUsername());
           stm.setString(2, u.getPassword());
           stm.setString(3, u.getType());
           ResultSet rs = stm.executeQuery();
           if ( rs.next() ) {   
                User newUser = new User(rs.getString("korisnicko_ime"), rs.getString("lozinka"), rs.getString("ime"), rs.getString("prezime"), rs.getString("tip"));
                return newUser;
           }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }
    
    
}
