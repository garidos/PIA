import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  login(kor_ime: string, lozinka: string, tip: string) {
    return this.http.get<korisnik>(`${this.backUrl}/korisnik/login/${kor_ime}/${lozinka}/${tip}`)
  }

  getSlobodniDizajneri() {
    return this.http.get<korisnik[]>(`${this.backUrl}/korisnik/getSlobodniDizajneri`)
  }

  getKorisnikByKorIme(kor_ime: string) {
    return this.http.get<korisnik>(`${this.backUrl}/korisnik/getKorisnikByKorIme/${kor_ime}`)
  }
}
