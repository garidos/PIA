package com.example.backend.controllers;

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
@CrossOrigin("http://localhost:4200/")
public class KorisnikController {
    
    private IKorisnikRepo repo = new KorisnikRepo();

    @GetMapping("/login/{korisnicko_ime}/{lozinka}/{tip}")
    public Korisnik login(@PathVariable String korisnicko_ime, @PathVariable String lozinka, @PathVariable String tip) {
        return repo.login(korisnicko_ime, lozinka, tip);
    }
    
}
