import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/korisnik"

  login(k: string, l: string, t: string) {
    return this.http.get<korisnik>(`${this.backUrl}/login/${k}/${l}/${t}`)
  }

  getKorisnik(kor_ime: string) {
    return this.http.get<korisnik>(`${this.backUrl}/getKorisnik/${kor_ime}`)
  }

}
