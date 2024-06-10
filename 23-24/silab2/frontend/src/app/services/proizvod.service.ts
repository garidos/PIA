import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Proizvod } from '../models/proizvod';

@Injectable({
  providedIn: 'root'
})
export class ProizvodService {

  backUrl: string = "http://localhost:4000/proizvodi"

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Proizvod[]>(`${this.backUrl}/getAll`);
  }

  updateProizvod(p: Proizvod) {
    return this.http.post<number>(`${this.backUrl}/updateProizvod`, p);
  }

  addProizvod(p: Proizvod) {
    return this.http.post<number>(`${this.backUrl}/addProizvod`, p);
  }
}
