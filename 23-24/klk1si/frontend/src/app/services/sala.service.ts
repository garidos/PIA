import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SalaService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getBrojMjesta(broj_sale: number) {
    return this.http.get<number>(`${this.backUrl}/sala/getBrojMjesta/${broj_sale}`)
  }
}
