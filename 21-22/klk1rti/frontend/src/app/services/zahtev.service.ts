import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { zahtev } from '../models/zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/zahtev"

  getAllZahtevi() {
    return this.http.get<zahtev[]>(`${this.backUrl}/getAll`)
  }

  deleteZahtev(id: number) {
    return this.http.delete<number>(`${this.backUrl}/deleteZahtev/${id}`)
  }

  addZahtev(z : zahtev) {
    return this.http.post<number>(`${this.backUrl}/addZahtev`, z)
  }
}
