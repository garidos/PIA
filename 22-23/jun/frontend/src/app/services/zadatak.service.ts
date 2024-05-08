import { Injectable } from '@angular/core';
import { zadatak } from '../models/zadatak';
import { korisnik } from '../models/korisnik';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZadatakService {

  backUrl: string = "http://localhost:8080/zadatak"

  constructor(private http: HttpClient) { }

  addZadatak(z: zadatak) {
    return this.http.post<number>(`${this.backUrl}/addZadatak`, z)
  }

  getZadaciByClan(c: korisnik) {
    return this.http.get<zadatak[]>(`${this.backUrl}/getZadaciByClan/${c.korisnicko_ime}`)
  }

  deleteZadatak(z: zadatak) {
    return this.http.delete<number>(`${this.backUrl}/deleteZadatak/${z.id}`)
  }

  updateZadatak(z: zadatak) {
    return this.http.post<number>(`${this.backUrl}/updateZadatak`, z)
  }
}
