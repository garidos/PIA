package com.example.backend.db;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.example.backend.models.Activity;

public class ActivityRepo implements IActivityRepo {

    @Override
    public List<Activity> getAllActivities() {

        try( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("select * from aktivnosti")
        ) {
           ResultSet rs = stm.executeQuery();
           ArrayList<Activity> activities = new ArrayList<Activity>();
           while ( rs.next() ) {   
                Activity activity = new Activity(rs.getInt("id"), rs.getString("naziv"),
                 rs.getString("datum_vreme"), rs.getString("napravio"), rs.getInt("status"), rs.getInt("sala1"), rs.getInt("sala2"), rs.getInt("sala3") );
                 activities.add(activity);
           }
           return activities;
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    @Override
    public int changeStatus(Activity activity) {
        try( Connection conn = DB.source().getConnection(); 
            PreparedStatement stm = conn.prepareStatement("update aktivnosti set status=? where naziv=?")
        ) {
            stm.setString(2, activity.getName());
            if ( activity.getStatus() == 0 ) {
                stm.setInt(1, 1);
            } else {
                stm.setInt(1, 0);
            }
           return stm.executeUpdate();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return 0;
    }
    
}
