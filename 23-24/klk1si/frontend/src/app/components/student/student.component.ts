import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aktivnost } from 'src/app/models/aktivnost';
import { korisnik } from 'src/app/models/korisnik';
import { AktivnostService } from 'src/app/services/aktivnost.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  
  student: korisnik = new korisnik()
  aktivnosti: aktivnost[] = []

  constructor(private aktivnostService: AktivnostService, private router: Router) {
    
  }

  ngOnInit(): void {
    let logged = localStorage.getItem("logged")
    if ( logged != null ) this.student = JSON.parse(logged)
    this.aktivnostService.getAktuelne().subscribe( data => {
      if ( data != null ) {
        this.aktivnosti = data
      }
    })
  }

  prijava(a: aktivnost) {
    localStorage.setItem("aktivnost", JSON.stringify(a));
    this.router.navigate(["aktivnost"])
  }
}
