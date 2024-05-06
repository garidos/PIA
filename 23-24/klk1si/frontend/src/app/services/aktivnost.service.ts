import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { aktivnost } from '../models/aktivnost';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class AktivnostService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAktuelne() {
    return this.http.get<aktivnost[]>(`${this.backUrl}/aktivnost/getAktuelne`)
  }

  getAktivnostiByAutor(nastavnik: korisnik) {
    return this.http.get<aktivnost[]>(`${this.backUrl}/aktivnost/getAktivnostiByAutor/${nastavnik.korisnicko_ime}`)
  }

  changeStatus(aktivnost_id: number, status: number) {
    return this.http.post<number>(`${this.backUrl}/aktivnost/changeStatus/${aktivnost_id}/${status}`, null)
  }

  dodajAktivnst(a: aktivnost) {
    return this.http.post<number>(`${this.backUrl}/aktivnost/dodajAktivnost`, a)
  }

}
