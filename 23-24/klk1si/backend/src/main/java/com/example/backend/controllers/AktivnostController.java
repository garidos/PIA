package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.AktivnostRepo;
import com.example.backend.db.IAktivnostRepo;
import com.example.backend.models.Aktivnost;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/aktivnost")
@CrossOrigin("http://localhost:4200/")
public class AktivnostController {
    private IAktivnostRepo repo = new AktivnostRepo();

    @GetMapping("/getAktuelne")
    public ArrayList<Aktivnost> getAktuelne() {
        return repo.getAktuelne();
    }

    @GetMapping("/getAktivnostiByAutor/{korisnicko_ime}")
    public ArrayList<Aktivnost> getAktivnostiByAutor( @PathVariable String korisnicko_ime) {
        return repo.getAktivnostiByAutor(korisnicko_ime);
    }

    @PostMapping("/changeStatus/{aktivnost_id}/{status}")
    public int changeStatus(@PathVariable int aktivnost_id, @PathVariable int status) {
        return repo.changeStatus(aktivnost_id, status);
    }
    
    @PostMapping("/dodajAktivnost")
    public int dodajAktivnost(@RequestBody Aktivnost aktivnost) {
        return repo.dodajAktivnost(aktivnost);
    }
        
}
