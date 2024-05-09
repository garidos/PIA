import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { hala } from '../models/hala';

@Injectable({
  providedIn: 'root'
})
export class HalaService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/hala"

  getSlobodneHale(datumOd: Date, datumDo: Date, broj_ljudi: number) {
    const data = {
      datum_od: datumOd,
      datum_do: datumDo
    }
    return this.http.post<hala[]>(`${this.backUrl}/getSlobodneHale/${broj_ljudi}`, data)
  }
}
