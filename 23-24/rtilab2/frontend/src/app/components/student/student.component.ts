import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';
import { PrijavaService } from 'src/app/services/prijava.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  logged: User = new User()
  activities: Activity[] = []

  constructor(private router: Router, private activityService: ActivityService,
    private prijavaService: PrijavaService
  ) {}

  ngOnInit(): void {
    let u = localStorage.getItem("logged")
    if ( u != null ) {
      this.logged = JSON.parse(u)
    }
    this.activityService.getAllActivities().subscribe( data => {
      this.activities = data.filter(a => a.status == 1)
    })
  }

  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }

  goToPrijava(a: Activity) {
    this.router.navigate(["prijava", {student: JSON.stringify(this.logged), activity: JSON.stringify(a)}])  
  }

}
