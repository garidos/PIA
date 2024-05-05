package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IUserRepo;
import com.example.backend.db.UserRepo;
import com.example.backend.models.User;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:4200/")
public class UserController {
    
    private IUserRepo repo = new UserRepo();
    
    @PostMapping("/login")
    public User login(@RequestBody User user) {
        return repo.login(user);
    }

}
