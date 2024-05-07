import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/models/korisnik';
import { objekat } from 'src/app/models/objekat';
import { ObjekatService } from 'src/app/services/objekat.service';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit{

  klijent: korisnik = new korisnik()
  objekti: objekat[] = [] 

  constructor(private objekatService: ObjekatService, private router: Router) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.klijent = JSON.parse(k)
    this.objekatService.getObjektiByKlijent(this.klijent).subscribe( data => {
      if ( data != null ) {
        this.objekti = data
      }
    })
  }

  renoviraj(o: objekat) {
    localStorage.setItem("objekat", JSON.stringify(o))
    this.router.navigate(["renoviraj"])
  }

}
