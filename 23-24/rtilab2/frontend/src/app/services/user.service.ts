import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  login(u: string, p: string, t: string) {
    const data = {
      username: u,
      password: p,
      type: t
    }
    return this.http.post<User>(`${this.backUrl}/users/login`, data);
  }

}
