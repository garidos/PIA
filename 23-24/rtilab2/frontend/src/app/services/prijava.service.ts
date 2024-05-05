import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Activity } from '../models/activity';

@Injectable({
  providedIn: 'root'
})
export class PrijavaService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  checkPrijava(s: User, a: Activity) {
    return this.http.post<boolean>(`${this.backUrl}/prijava/check/${s.username}`, a );
  }

  prijavi(s: User, a: Activity, sala: string) {
    return this.http.post<number>(`${this.backUrl}/prijava/prijavi/${s.username}/${a.id}/${sala}`, null)
  }
}
