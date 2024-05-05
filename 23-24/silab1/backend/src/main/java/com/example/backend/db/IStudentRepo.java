package com.example.backend.db;

import com.example.backend.models.Student;

public interface IStudentRepo {
    public Student getStudentByIndeks(String indeks);
    public double getProsjek(String indeks);
}
