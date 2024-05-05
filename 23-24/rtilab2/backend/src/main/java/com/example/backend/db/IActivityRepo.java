package com.example.backend.db;

import java.util.List;

import com.example.backend.models.Activity;

public interface IActivityRepo {
    
    public List<Activity> getAllActivities();
    public int changeStatus(Activity activity);
}
