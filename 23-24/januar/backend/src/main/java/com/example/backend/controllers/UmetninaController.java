package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IUmetninaRepo;
import com.example.backend.db.UmetninaRepo;
import com.example.backend.models.Umetnina;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/umetnina")
@CrossOrigin("http://localhost:4200")
public class UmetninaController {
    
    private IUmetninaRepo repo = new UmetninaRepo();

    @GetMapping("/getUmetnineByAukcija/{id}")
    public ArrayList<Umetnina> getUmetnineByAukcija(@PathVariable int id) {
        return repo.getUmetnineByAukcija(id);
    }

    @PostMapping("/addPonuda")
    public int addPonuda(@RequestBody Umetnina umetnina) {
        return repo.addPonuda(umetnina);
    }
    
    @GetMapping("/getKupljene/{vlasnik}")
    public ArrayList<Umetnina> getKupljene(@PathVariable String vlasnik) {
        return repo.getKupljene(vlasnik);
    }
    
}
