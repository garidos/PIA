import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  backUrl: string = "http://localhost:8080/korisnik"

  constructor(private http: HttpClient) { }

  login(kor_ime: string, lozinka: string, tip: string) {
    return this.http.get<korisnik>(`${this.backUrl}/login/${kor_ime}/${lozinka}/${tip}`)
  }

  getClanoviTima(tim: number) {
    return this.http.get<korisnik[]>(`${this.backUrl}/getClanoviTima/${tim}`)
  }
}
