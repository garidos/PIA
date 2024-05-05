import { Injectable } from '@angular/core';
import { Activity } from '../models/activity';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  backUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAllActivities() {
    return this.http.get<Activity[]>(`${this.backUrl}/activities/getAllActivities`)
  }

  changeStatus(a: Activity) {
    return this.http.post<number>(`${this.backUrl}/activities/changeStatus`, a)
  }
}
