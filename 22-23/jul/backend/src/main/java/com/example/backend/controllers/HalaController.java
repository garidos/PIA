package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IHalaRepo;
import com.example.backend.db.HalaRepo;
import com.example.backend.models.DateHelper;
import com.example.backend.models.Hala;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;




@RestController
@RequestMapping("/hala")
@CrossOrigin(origins = "http://localhost:4200")
public class HalaController {
    
    private IHalaRepo repo = new HalaRepo();

    
    @PostMapping("/getSlobodneHale/{broj_ljudi}")
    public ArrayList<Hala> getSlobodneHale(@RequestBody DateHelper datumi, @PathVariable int broj_ljudi) {
        return repo.getSlobodneHale(datumi.getDatum_od(), datumi.getDatum_do(), broj_ljudi);
    }

    
}
