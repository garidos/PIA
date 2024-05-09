package com.example.backend.controllers;

import com.example.backend.db.KorisnikRepo;
import com.example.backend.db.IKorisnikRepo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Korisnik;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@RestController
@RequestMapping("/korisnik")
@CrossOrigin(origins = "http://localhost:4200")
public class KorisnikController {
    
    private IKorisnikRepo repo = new KorisnikRepo();

    @GetMapping("/login/{kor_ime}/{lozinka}/{tip}")
    public Korisnik login(@PathVariable String kor_ime, @PathVariable String lozinka, @PathVariable String tip) {
        return repo.login(kor_ime, lozinka, tip);
    }

    @GetMapping("/getKorisnik/{ime}")
    public Korisnik getKorisnik(@PathVariable String ime) {
        return repo.getKorisnik(ime);
    }

    
}
