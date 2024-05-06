import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';
import { aktivnost } from '../models/aktivnost';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  checkPrijava(student: korisnik, akt: aktivnost) {
    return this.http.get<boolean>(`${this.backUrl}/prijava/checkPrijava/${student.korisnicko_ime}/${akt.id}`)
  }

  addPrijava(korisnicko_ime: string, aktivnost_id: number, sala: number) {
    return this.http.post<number>(`${this.backUrl}/prijava/addPrijava/${korisnicko_ime}/${aktivnost_id}/${sala}`, null)
  }
}
