import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { aukcija } from 'src/app/models/aukcija';
import { korisnik } from 'src/app/models/korisnik';
import { umetnina } from 'src/app/models/umetnina';
import { AukcijaService } from 'src/app/services/aukcija.service';
import { UmetninaService } from 'src/app/services/umetnina.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit {

  kupac: korisnik = new korisnik()
  aukcije: aukcija[] = []
  kupljene: umetnina[] = []
  errMessage = ""

  constructor(private aukcijaService: AukcijaService, private router: Router, private umetninaService: UmetninaService) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.kupac = JSON.parse(k)
    this.aukcijaService.getOtvorene().subscribe( data => {
      if ( data != null ) {
        this.aukcije = data
      }
    })
    this.umetninaService.getKupljene(this.kupac).subscribe( data => {
      if ( data != null ) {
        this.kupljene = data
        if ( this.kupljene.length == 0 ) this.errMessage = "Nema kupljenih umjetnina"
      }
    })
    
  }

  goToAukcija(a: aukcija) {
    localStorage.setItem("izabrana", JSON.stringify(a))
    this.router.navigate(["aukcija"])
  }

}
