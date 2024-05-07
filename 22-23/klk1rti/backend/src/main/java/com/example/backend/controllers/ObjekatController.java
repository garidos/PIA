package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IObjekatRepo;
import com.example.backend.db.ObjekatRepo;
import com.example.backend.models.Objekat;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/objekat")
@CrossOrigin(origins = "http://localhost:4200")
public class ObjekatController {
    private IObjekatRepo repo = new ObjekatRepo();

    @GetMapping("/getObjektiByKlijent/{kor_ime}")
    public ArrayList<Objekat> getObjektiByKlijent(@PathVariable String kor_ime) {
        return repo.getObjektiByKlijent(kor_ime);
    }

    @PostMapping("/changeStanje/{stanje}")
    public int changeStanje(@RequestBody Objekat o, @PathVariable String stanje) {
        return repo.changeStanje(o, stanje);
    }
    
    @GetMapping("/getObjekatById/{id}")
    public Objekat getObjekatById(@PathVariable int id) {
        return repo.getObjekatById(id);
    }
    
}
