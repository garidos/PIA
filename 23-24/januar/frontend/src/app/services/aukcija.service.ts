import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aukcija } from '../models/aukcija';

@Injectable({
  providedIn: 'root'
})
export class AukcijaService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  getOtvorene() {
    return this.http.get<aukcija[]>(`${this.backUrl}/aukcija/getOtvorene`)
  }

  getAll() {
    return this.http.get<aukcija[]>(`${this.backUrl}/aukcija/getAll`)
  }
}
