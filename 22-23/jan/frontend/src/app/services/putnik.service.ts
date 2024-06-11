import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Putnik } from '../models/putnik';

@Injectable({
  providedIn: 'root'
})
export class PutnikService {
  backUrl: string = "http://localhost:4000/putnici"

  constructor(private http: HttpClient) { }

  login(kor_ime: string, lozinka: string) {
    const data = {
      korisnickoIme: kor_ime,
      lozinka: lozinka,
    };
    return this.http.post<Putnik>(`${this.backUrl}/login`, data);
  }

  updatePutnik(p: Putnik) {
    return this.http.post<number>(`${this.backUrl}/updatePutnik`, p);
  }

}
