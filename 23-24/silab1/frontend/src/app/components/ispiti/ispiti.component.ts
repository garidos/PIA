import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ispit } from 'src/app/models/Ispit';
import { IspitService } from 'src/app/services/ispit.service';

@Component({
  selector: 'app-ispiti',
  templateUrl: './ispiti.component.html',
  styleUrls: ['./ispiti.component.css']
})

export class IspitiComponent implements OnInit{
  
  datumOd: string = ""
  datumDo: string = ""
  ispiti: ispit[] = []
  errMsg: string = ""

  constructor(private ispitService: IspitService, private router: Router) {
    
  }

  ngOnInit(): void {
    let dod = localStorage.getItem("datumOd")
    if ( dod != null ) this.datumOd = dod
    let ddo = localStorage.getItem("datumDo")
    if ( ddo != null ) this.datumDo = ddo
    this.ispitService.getIspitiByDates(this.datumOd, this.datumDo).subscribe( data => {
      if ( data != null ) {
        this.ispiti = data
        if ( this.ispiti.length == 0 ) this.errMsg = "Ne postoje evidentirani polozeni ispiti u ovom vremenskom periodu!"
      }
    })
  }

  nazad() {
    //localStorage.clear()
    this.router.navigate([""])
  }
}
