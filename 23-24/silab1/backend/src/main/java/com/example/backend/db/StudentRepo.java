package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import com.example.backend.models.Student;

public class StudentRepo implements IStudentRepo {

    @Override
    public Student getStudentByIndeks(String indeks) {
        try (Connection conn = DB.source().getConnection();
            PreparedStatement stm = conn.prepareStatement("select * from studenti where indeks=?")
        ) {
            stm.setString(1, indeks);
            ResultSet rs = stm.executeQuery();
            if ( rs.next() ) {
                Student student = new Student(rs.getString("ime"), rs.getString("prezime"), rs.getInt("godina"), indeks);
                return student;
            }  
        } catch (SQLException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public double getProsjek(String indeks) {
        try ( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from ispiti where student=?")
        ) {
            stm.setString(1, indeks);
            ResultSet rs = stm.executeQuery();
            ArrayList<Integer> ocjene = new ArrayList<>();
            while ( rs.next() ) {
                ocjene.add(rs.getInt("ocena"));
            }
            if ( ocjene.isEmpty() ) return -1;
            double sum = 0;
            for ( int o : ocjene ) sum += o;
            return sum / ocjene.size(); 
        } catch(SQLException e) {
            e.printStackTrace();
        }

        return -1;
    }
    
}
