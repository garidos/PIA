import { Injectable } from '@angular/core';
import { posao } from '../models/posao';
import { HttpClient } from '@angular/common/http';
import { korisnik } from '../models/korisnik';

@Injectable({
  providedIn: 'root'
})
export class PosaoService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  addPosao(p: posao) {
    return this.http.post<number>(`${this.backUrl}/posao/addPosao`, p)
  }

  getPosaoByDizajner(d: korisnik) {
    return this.http.get<posao>(`${this.backUrl}/posao/getPosaoByDizajner/${d.kor_ime}`)
  }

  changeProgres(kolicina: number, p: posao) {
    return this.http.post<number>(`${this.backUrl}/posao/changeProgres/${kolicina}`, p)
  }

  deletePosao(p: posao) {
    return this.http.delete<number>(`${this.backUrl}/posao/deletePosao/${p.id}`)
  }
}
