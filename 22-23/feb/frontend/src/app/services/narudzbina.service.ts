import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Narudzbina } from '../models/narudzbina';

@Injectable({
  providedIn: 'root'
})
export class NarudzbinaService {

  backUrl: string = 'http://localhost:4000/narudzbine';

  constructor(private http: HttpClient) {}

  addNarudzbina(n : Narudzbina) {
    return this.http.post<number>(`${this.backUrl}/addNarudzbina`, n);
  }

  getAll() {
    return this.http.get<Narudzbina[]>(`${this.backUrl}/getAll`);
  }
}
