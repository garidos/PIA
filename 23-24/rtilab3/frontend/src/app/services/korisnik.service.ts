import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Korisnik } from '../models/korisnik';
import { Proizvod } from '../models/proizvod';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  backUrl: string = "http://localhost:4000/korisnici"

  constructor(private http: HttpClient) { }

  login(kor_ime: string, lozinka: string, tip: string) {
    const data = {
      korisnickoIme: kor_ime,
      lozinka: lozinka,
      tip: tip
    };
    return this.http.post<Korisnik>(`${this.backUrl}/login`, data);
  }

  getAllRegistrovani() {
    return this.http.get<Korisnik[]>(`${this.backUrl}/getAllRegistrovani`);
  }

  updateKorisnik(k: Korisnik) {
    return this.http.post<number>(`${this.backUrl}/updateKorisnik`, k);
  }

  addProizvod(korisnik:string, ime: string, cijena: number) {
    const data = {
      korisnik: korisnik,
      proizvod: ime,
      cena: cijena
    };
    return this.http.post<number>(`${this.backUrl}/addProizvod`, data);
  }

  getKorisnik(kor_ime: string) {
    return this.http.get<Korisnik>(`${this.backUrl}/getKorisnik?kor_ime=${kor_ime}`);
  }

  kupiPoklon(korisnik: string, proizvod: Proizvod) {
    return this.http.post<number>(`${this.backUrl}/kupiPoklon?korisnik=${korisnik}`, proizvod);
  }
}
