package com.example.backend.db;

import com.example.backend.models.User;

public interface IUserRepo {
    
    public User login(User u);

}
