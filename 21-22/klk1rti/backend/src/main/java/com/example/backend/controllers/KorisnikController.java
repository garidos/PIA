package com.example.backend.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.KorisnikRepo;
import com.example.backend.db.IKorisnikRepo;
import com.example.backend.models.Korisnik;

@RestController
@RequestMapping("/korisnik")
@CrossOrigin(origins = "http://localhost:4200/")
public class KorisnikController {

    private IKorisnikRepo repo = new KorisnikRepo();

    @PostMapping("/login")
    public Korisnik login(@RequestBody Korisnik u){
        return repo.login(u);
    }
}
