package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IPrijavaRepo;
import com.example.backend.db.PrijavaRepo;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
@RequestMapping("/prijava")
@CrossOrigin("http://localhost:4200/")
public class PrijavaController {
    private IPrijavaRepo repo = new PrijavaRepo();

    @GetMapping("/checkPrijava/{korisnicko_ime}/{aktivnost_id}")
    public boolean checkPrijava(@PathVariable String korisnicko_ime, @PathVariable int aktivnost_id) {
        return repo.checkPrijava(korisnicko_ime, aktivnost_id);
    }
    
    @PostMapping("/addPrijava/{korisnicko_ime}/{aktivnost_id}/{sala}")
    public int postMethodName(@PathVariable String korisnicko_ime, @PathVariable int aktivnost_id, @PathVariable int sala) {
        String sala_string = "Sala" + sala;
        return repo.addPrijava(korisnicko_ime, aktivnost_id, sala_string);
    }
    
}