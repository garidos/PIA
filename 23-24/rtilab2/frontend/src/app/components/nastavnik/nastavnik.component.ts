import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { ActivityService } from 'src/app/services/activity.service';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit {

  activities: Activity[] = []
  professor: User = new User()

  constructor(private router: Router, private activityService: ActivityService) {}

  ngOnInit(): void {
    let prof = localStorage.getItem("logged")
    if ( prof != null) {
      this.professor = JSON.parse(prof)
    }
    this.activityService.getAllActivities().subscribe(
      data => {
        this.activities = data.filter((a) => a.author == this.professor.username)
      }
    )
  }

  logout() {
    localStorage.clear()
    this.router.navigate([""])
  }

  changeStatus(a: Activity) {
    this.activityService.changeStatus(a).subscribe(data => {
      if ( data > 0 ) {
        if ( a.status == 1) {
          a.status = 0
        } else {
          a.status = 1
        }
      }
    })
  }

}
