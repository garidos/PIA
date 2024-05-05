import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { User } from 'src/app/models/user';
import { PrijavaService } from 'src/app/services/prijava.service';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css']
})
export class PrijavaComponent implements OnInit{

  activity: Activity = new Activity()
  student: User = new User()
  prijavljen: boolean = false

  constructor(private route: ActivatedRoute, private prijavaService: PrijavaService, private location: Location) {}

  ngOnInit(): void {
    let a = this.route.snapshot.paramMap.get("activity")
    if ( a != null ) {
      this.activity = JSON.parse(a)
    }
    a = this.route.snapshot.paramMap.get("student")
    if ( a != null ) {
      this.student = JSON.parse(a)
    }
    this.prijavaService.checkPrijava(this.student, this.activity).subscribe(
      data => {
        this.prijavljen = data
      }
    )
  }

  prijava(brojSale: number) {
   
    this.prijavaService.prijavi(this.student, this.activity, "sala"+brojSale).subscribe(
      data => {
        if ( data > 0 ) {
          this.prijavljen = true
        } else {

        }
      }
    )   
  }
}
