import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/korisnik"

  login(u: string, p: string, t: string){
    const data = {
      korisnicko_ime: u,
      lozinka: p,
      tip: t
    }
    return this.http.post<korisnik>(`${this.backUrl}/login`, data);
  }
}
