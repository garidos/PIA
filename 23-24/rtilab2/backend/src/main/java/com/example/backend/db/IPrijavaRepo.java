package com.example.backend.db;

import com.example.backend.models.Activity;

public interface IPrijavaRepo {
    
    public boolean checkPrijava(String username, Activity activity);
    public int prijavi(String username, int activity, String sala);
}
