package com.example.backend.controllers;

import java.sql.Date;
import java.util.ArrayList;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IIspitRepo;
import com.example.backend.db.IspitRepo;
import com.example.backend.models.Ispit;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/ispit")
@CrossOrigin(origins = "http://localhost:4200/")
public class IspitController {

    private IIspitRepo repo = new IspitRepo();
    
    @GetMapping("/getIspitiByDates/{datumOd}/{datumDo}")
    public ArrayList<Ispit> getIspitiByDates(@PathVariable String datumOd, @PathVariable String datumDo) {
        Date dOd = Date.valueOf(datumOd);
        Date dDo = Date.valueOf(datumDo);
        return repo.getIspitiByDates(dOd, dDo);
    }

    @GetMapping("/getIspitiByStudent/{godina}/{broj}")
    public ArrayList<Ispit> getIspitiByStudent(@PathVariable String godina, @PathVariable String broj) {
        return repo.getIspitiByStudent(godina + "/" + broj);
    }

    @PostMapping("/addIspit")
    public int addIspit(@RequestBody Ispit ispit) {
        return repo.addispit(ispit);
    }
    
    
}
