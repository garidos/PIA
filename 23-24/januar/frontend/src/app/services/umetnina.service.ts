import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { umetnina } from '../models/umetnina';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class UmetninaService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  getUmetnineByAukcija(aukcija: number) {
    return this.http.get<umetnina[]>(`${this.backUrl}/umetnina/getUmetnineByAukcija/${aukcija}`)
  }

  addPonuda(u: umetnina) {
    return this.http.post<number>(`${this.backUrl}/umetnina/addPonuda`, u)
  }

  getKupljene(k: korisnik) {
    return this.http.get<umetnina[]>(`${this.backUrl}/umetnina/getKupljene/${k.korisnicko_ime}`)
  }
}
