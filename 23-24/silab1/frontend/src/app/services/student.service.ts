import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getStudentByIndeks(indeks: string) {
    return this.http.get<student>(`${this.backUrl}/student/getStudent/${indeks}`)
  }

  getProsjek(indeks: string) {
    return this.http.get<number>(`${this.backUrl}/student/getProsjek/${indeks}`)
  }
}
