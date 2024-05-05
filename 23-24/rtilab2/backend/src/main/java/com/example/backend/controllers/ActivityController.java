package com.example.backend.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ActivityRepo;
import com.example.backend.models.Activity;

@RestController
@RequestMapping("/activities")
@CrossOrigin(origins = "http://localhost:4200/")
public class ActivityController {
    
    private ActivityRepo repo = new ActivityRepo();

    @GetMapping("/getAllActivities")
    public List<Activity> getAllActivities() {
        return repo.getAllActivities();
    }

    @PostMapping("/changeStatus")
    public int changeStatus(@RequestBody Activity a) {
        return repo.changeStatus(a);
    }
    
}
