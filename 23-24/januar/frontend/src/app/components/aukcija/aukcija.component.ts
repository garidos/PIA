import { Component, OnInit } from '@angular/core';
import { aukcija } from 'src/app/models/aukcija';
import { korisnik } from 'src/app/models/korisnik';
import { umetnina } from 'src/app/models/umetnina';
import { umetninaHelper } from 'src/app/models/umetninaHelper';
import { UmetninaService } from 'src/app/services/umetnina.service';

@Component({
  selector: 'app-aukcija',
  templateUrl: './aukcija.component.html',
  styleUrls: ['./aukcija.component.css']
})
export class AukcijaComponent implements OnInit {


  izabrana: aukcija = new aukcija()
  umetnine: umetninaHelper[] = []
  kupac: korisnik = new korisnik()

  constructor(private umetninaService: UmetninaService) {}

  ngOnInit(): void {
    let a = localStorage.getItem("izabrana")
    if ( a != null ) this.izabrana = JSON.parse(a)
    let k = localStorage.getItem("logged")
    if ( k != null ) this.kupac = JSON.parse(k)
    this.umetninaService.getUmetnineByAukcija(this.izabrana.id).subscribe( data => {
      if ( data != null ) {
        for ( var d of data ) {
          let u = new umetninaHelper()
          u.umetnina = d
          this.umetnine.push(u)
        }
      }
    })
  }


  potvrdi(u: umetninaHelper) {
    if ( u.novaPonuda <= u.umetnina.ponuda ) u.errMessage = "Nova ponuda mora biti veca od trenutne" 
    else if  ( new Date(this.izabrana.kraj) <= new Date() ) u.errMessage = "Vrijeme aukcije je isteklo"
    else {
      u.umetnina.ponuda = u.novaPonuda
      u.umetnina.vlasnik = this.kupac.korisnicko_ime
      this.umetninaService.addPonuda(u.umetnina).subscribe( data => {
        if ( data > 0 ) {
          u.errMessage = ""
          u.novaPonuda = 0
        }
      })
    }
  }

}
