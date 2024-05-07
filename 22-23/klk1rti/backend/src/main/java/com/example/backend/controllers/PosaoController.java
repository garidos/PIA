package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IPosaoRepo;
import com.example.backend.db.PosaoRepo;
import com.example.backend.models.Posao;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@RequestMapping("/posao")
@CrossOrigin(origins = "http://localhost:4200")
public class PosaoController {
    private IPosaoRepo repo = new PosaoRepo();

    @PostMapping("/addPosao")
    public int addPosao(@RequestBody Posao posao) {
        return repo.addPosao(posao);
    }

    @GetMapping("/getPosaoByDizajner/{dizajner}")
    public Posao getPosaoByDizajner(@PathVariable String dizajner) {
        return repo.getPosaoByDizajner(dizajner);
    }
    
    @PostMapping("/changeProgres/{kolicina}")
    public int changeProgres(@RequestBody Posao posao, @PathVariable int kolicina) {
        return repo.changeProgres(posao, kolicina);
    }

    @DeleteMapping("/deletePosao/{id}")
    public int deletePosao(@PathVariable int id) {
        return repo.deletePosao(id);
    }
}
