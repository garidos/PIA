package com.example.backend.controllers;

import java.util.ArrayList;

import com.example.backend.db.ZahtevRepo;
import com.example.backend.db.IZahtevRepo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.models.Zahtev;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/zahtev")
@CrossOrigin(origins = "http://localhost:4200")
public class ZahtevController {
    
    private IZahtevRepo repo = new ZahtevRepo();

    
    @PostMapping("/addZahtev")
    public int addZahtev(@RequestBody Zahtev zahtev) {
        return repo.addZahtev(zahtev);
    }

    @GetMapping("/getZahteviByKlijent/{ime}")
    public ArrayList<Zahtev> getZahteviByKlijent(@PathVariable String ime) {
        return repo.getZahteviByKlijent(ime);
    }

    @GetMapping("/getAllZahtevi")
    public ArrayList<Zahtev> getAllZahtevi() {
        return repo.getAllZahtevi();
    }
    
    @PostMapping("/prihvatiZahtev")
    public int prihvatiZahtev(@RequestBody Zahtev zahtev) {
        return repo.prihvatiZahtev(zahtev);
    }
    
}
