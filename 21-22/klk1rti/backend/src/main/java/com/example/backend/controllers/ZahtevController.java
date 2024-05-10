package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.ZahtevRepo;
import com.example.backend.db.IZahtevRepo;
import com.example.backend.models.Zahtev;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/zahtev")
@CrossOrigin(origins = "http://localhost:4200/")
public class ZahtevController {
    private IZahtevRepo repo = new ZahtevRepo();

    @GetMapping("/getAll")
    public ArrayList<Zahtev> getAll() {
        return repo.getAll();
    }
    
    @DeleteMapping("/deleteZahtev/{id}")
    public int deleteZahtev(@PathVariable int id) {
        return repo.deleteZahtev(id);
    }

    @PostMapping("/addZahtev")
    public int addZahtev(@RequestBody Zahtev zahtev) {
        return repo.addZahtev(zahtev);
    }
    
}
