import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { korisnik } from '../models/korisnik';
import { objekat } from '../models/objekat';

@Injectable({
  providedIn: 'root'
})
export class ObjekatService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080"

  getObjektiByKlijent(k: korisnik) {
    return this.http.get<objekat[]>(`${this.backUrl}/objekat/getObjektiByKlijent/${k.kor_ime}`)
  }

  getObjekatById(id: number) {
    return this.http.get<objekat>(`${this.backUrl}/objekat/getObjekatById/${id}`)
  }

  changeStanje(o: objekat, stanje: string) {
    return this.http.post<number>(`${this.backUrl}/objekat/changeStanje/${stanje}`, o);
  }

}
