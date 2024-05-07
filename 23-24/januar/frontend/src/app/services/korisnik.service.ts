import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  login(korisnicko_ime: string, lozinka: string, tip: string) {
    return this.http.get<korisnik>(`${this.backUrl}/korisnik/login/${korisnicko_ime}/${lozinka}/${tip}`)
  }

  getAll() {
    return this.http.get<korisnik[]>(`${this.backUrl}/korisnik/getAll`)
  }
}
