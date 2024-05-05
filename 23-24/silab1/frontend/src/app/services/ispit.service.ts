import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ispit } from '../models/Ispit';

@Injectable({
  providedIn: 'root'
})
export class IspitService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getIspitiByDates(datumOd: string, datumDo: string) {
    return this.http.get<ispit[]>(`${this.backUrl}/ispit/getIspitiByDates/${datumOd}/${datumDo}`)
  }

  getIspitiByStudent(indeks: string) {
    return this.http.get<ispit[]>(`${this.backUrl}/ispit/getIspitiByStudent/${indeks}`)
  }

  addIspit(i : ispit) {
    return this.http.post<number>(`${this.backUrl}/ispit/addIspit`, i)
  }

}
