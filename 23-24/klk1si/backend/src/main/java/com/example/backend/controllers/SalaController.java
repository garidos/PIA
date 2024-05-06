package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ISalaRepo;
import com.example.backend.db.SalaRepo;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;


@RestController
@RequestMapping("/sala")
@CrossOrigin("http://localhost:4200/")
public class SalaController {
    private ISalaRepo repo = new SalaRepo();

    @GetMapping("/getBrojMjesta/{broj}")
    public int getBrojMjesta(@PathVariable int broj) {
        return repo.getBrojMjesta(broj);
    }
    
}
