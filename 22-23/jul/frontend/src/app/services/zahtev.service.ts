import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { zahtev } from '../models/zahtev';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/zahtev"

  addZahtev(z: zahtev) {
    return this.http.post<number>(`${this.backUrl}/addZahtev`, z)
  }

  getZahteviByKlijent(k: korisnik) {
    return this.http.get<zahtev[]>(`${this.backUrl}/getZahteviByKlijent/${k.kor_ime}`)
  }

  getAllZahtevi() {
    return this.http.get<zahtev[]>(`${this.backUrl}/getAllZahtevi`)
  }

  prihvatiZahtev(z: zahtev) {
    z.datum_do = new Date(z.datum_do.toISOString().substring(0,10))
    z.datum_od = new Date(z.datum_od.toISOString().substring(0,10))
    return this.http.post<number>(`${this.backUrl}/prihvatiZahtev`, z)
  }
}
