import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agencija } from '../models/agencija';
import { Ponuda } from '../models/ponuda';

@Injectable({
  providedIn: 'root'
})
export class AgencijaService {

  backUrl: string = "http://localhost:4000/agencije"

  constructor(private http: HttpClient) { }

  login(kor_ime: string, lozinka: string) {
    const data = {
      korisnickoIme: kor_ime,
      lozinka: lozinka,
    };
    return this.http.post<Agencija>(`${this.backUrl}/login`, data);
  }

  addPonuda(p: Ponuda, korisnickoIme: string) {
    return this.http.post<number>(`${this.backUrl}/addPonuda?kor_ime=${korisnickoIme}`, p);
  }

  getAll() {
    return this.http.get<Agencija[]>(`${this.backUrl}/getAll`);
  }

  search(lokacija_od: string, lokacija_do: string, brzivoz: boolean, aviokarta: boolean, hotel: boolean, cena_od: number, cena_do: number) {
    return this.http.get<Ponuda[]>(
      `${this.backUrl}/search?lokacija_od=${lokacija_od}&lokacija_do=${lokacija_do}&brzivoz=${brzivoz}&aviokarta=${aviokarta}&hotel=${hotel}&cena_od=${cena_od}&cena_do=${cena_do}`);
  }

  getAllPonude() {
    return this.http.get<Ponuda[]>(`${this.backUrl}/getAllPonude`);
  }

  updatePonuda(agencija: string, p : Ponuda) {
    return this.http.post<number>(`${this.backUrl}/updatePonuda?agencija=${agencija}`, p);
  }
}
