import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { automobil } from '../models/automobil';

@Injectable({
  providedIn: 'root'
})
export class AutomobilService {

  constructor(private http: HttpClient) { }

  backUrl: string = "http://localhost:8080/automobil"

  getAutomobil(id: number) {
    return this.http.get<automobil>(`${this.backUrl}/getAutomobil/${id}`)
  }

  getAllAutomobili() {
    return this.http.get<automobil[]>(`${this.backUrl}/getAll`)
  }
}
