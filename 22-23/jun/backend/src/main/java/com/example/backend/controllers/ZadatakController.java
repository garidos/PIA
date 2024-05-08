package com.example.backend.controllers;

import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IZadatakRepo;
import com.example.backend.db.ZadatakRepo;
import com.example.backend.models.Zadatak;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/zadatak")
@CrossOrigin("http://localhost:4200")
public class ZadatakController {

    private IZadatakRepo repo = new ZadatakRepo();
    

    @PostMapping("/addZadatak")
    public int addZadatak(@RequestBody Zadatak zadatak) {
        return repo.addZadatak(zadatak);
    }

    @GetMapping("/getZadaciByClan/{clan}")
    public ArrayList<Zadatak> getZadaciByClan(@PathVariable String clan) {
        return repo.getZadciByClan(clan);
    }

    @PostMapping("/updateZadatak")
    public int updateZadatak(@RequestBody Zadatak zadatak) {
        return repo.updateZadatak(zadatak);
    }

    @DeleteMapping("/deleteZadatak/{id}")
    public int deleteZadatak(@PathVariable int id) {
       return repo.deleteZadatak(id);
    }
    
}
