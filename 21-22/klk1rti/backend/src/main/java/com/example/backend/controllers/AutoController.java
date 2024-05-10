package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.AutoRepo;
import com.example.backend.db.IAutoRepo;
import com.example.backend.models.Automobil;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/automobil")
@CrossOrigin(origins = "http://localhost:4200/")
public class AutoController {
    private IAutoRepo repo = new AutoRepo();

    @GetMapping("/getAutomobil/{id}")
    public Automobil getAutomobil(@PathVariable int id) {
        return repo.getAutomobil(id);
    }

    @GetMapping("/getAll")
    public ArrayList<Automobil> getAll() {
        return repo.getAll();
    }
    
}
