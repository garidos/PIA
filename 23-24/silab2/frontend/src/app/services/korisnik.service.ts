import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  backUrl: string = "http://localhost:4000/korisnici"

  constructor(private http: HttpClient) { }

  login(kor_ime: string, lozinka: string, tip: string) {
    const data = {
      kor_ime: kor_ime,
      lozinka: lozinka,
      tip: tip
    }
    return this.http.post<Korisnik>(`${this.backUrl}/login`, data);
  }

  getAll() {
    return this.http.get<Korisnik[]>(`${this.backUrl}/getAll`);
  }
}
