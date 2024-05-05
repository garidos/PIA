package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.PrijavaRepo;
import com.example.backend.models.Activity;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
@RequestMapping("/prijava")
@CrossOrigin(origins = "http://localhost:4200/")
public class PrijavaController {

    private PrijavaRepo repo = new PrijavaRepo();
    
    @PostMapping("/check/{username}")
    public boolean postMethodName(@RequestBody Activity activity, @PathVariable String username) {
        return repo.checkPrijava(username, activity);
    }
    
    @PostMapping("/prijavi/{username}/{activity}/{sala}")
    public int prijavi(@PathVariable String username, @PathVariable int activity, @PathVariable String sala) {
        return repo.prijavi(username, activity, sala);
    }
    

}
