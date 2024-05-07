package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IKorisnikRepo;
import com.example.backend.db.KorisnikRepo;
import com.example.backend.models.Korisnik;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
@RequestMapping("/korisnik")
@CrossOrigin("http://localhost:4200")
public class KorisnikController {
    
    private IKorisnikRepo repo = new KorisnikRepo();
    
    @GetMapping("/login/{ime}/{lozinka}/{tip}")
    public Korisnik login(@PathVariable String ime, @PathVariable String lozinka, @PathVariable String tip) {
        return repo.login(ime, lozinka, tip);
    }

    @GetMapping("/getAll")
    public ArrayList<Korisnik> getAll() {
        return repo.getAll();
    }
    
}
