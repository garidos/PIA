package com.example.backend.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.db.IStudentRepo;
import com.example.backend.db.StudentRepo;
import com.example.backend.models.Student;


@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:4200/")
public class StudentController {

    private IStudentRepo repo = new StudentRepo();

    @GetMapping("/getStudent/{godina}/{broj}")
    public Student getStudentByIndeks( @PathVariable String godina, @PathVariable String broj ) {
        return repo.getStudentByIndeks(godina + "/" + broj);
    }
    
    @GetMapping("/getProsjek/{godina}/{broj}")
    public double getMethodName(@PathVariable String godina, @PathVariable String broj) {
        return repo.getProsjek(godina + "/" + broj);
    }
    

}