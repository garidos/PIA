package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.AukcijaRepo;
import com.example.backend.db.IAukcijaRepo;
import com.example.backend.models.Aukcija;

import org.springframework.web.bind.annotation.GetMapping;


@RestController
@RequestMapping("/aukcija")
@CrossOrigin("http://localhost:4200")
public class AukcijaController {
    private IAukcijaRepo repo = new AukcijaRepo();

    @GetMapping("/getOtvorene")
    public ArrayList<Aukcija> getOtvorene() {
        return repo.getOtvorene();
    }

    @GetMapping("/getAll")
    public ArrayList<Aukcija> getAll() {
        return repo.getAll();
    }
    
}
