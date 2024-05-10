import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { automobil } from 'src/app/models/automobil';
import { korisnik } from 'src/app/models/korisnik';
import { zahtev } from 'src/app/models/zahtev';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.css']
})
export class PonudaComponent implements OnInit{

  ponuda: number = 0

  auto: automobil = new automobil
  datum: string = ""
  snaga: number = 0
  teh_pregled: boolean = false
  polisa: boolean = false
  kupac: korisnik = new korisnik()
  prihvacen: boolean = false

  constructor(private router: Router, private zahtevService: ZahtevService) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null) this.kupac = JSON.parse(k)
    this.izracunaj()
  }

  izracunaj() {
    let a = localStorage.getItem("auto")
    if ( a != null ) this.auto = JSON.parse(a)
    let d = localStorage.getItem("datum")
    if ( d != null ) this.datum = d
    let s = localStorage.getItem("snaga")
    if ( s != null ) this.snaga = Number.parseInt(s)
    let t = localStorage.getItem("teh_pregled")
    if (t != null ) {
      if ( t == "da") this.teh_pregled = true
      else this.teh_pregled = false
    }
    let p = localStorage.getItem("polisa")
    if (p != null ) {
      if ( p == "da") this.polisa = true
      else this.polisa = false
    }

    this.ponuda = this.auto.cena_registracije
    let year_diff =  new Date().getFullYear() - new Date(this.datum).getFullYear()
    let month_diff = new Date().getMonth() - new Date(this.datum).getMonth() 
    let day_diff =  new Date().getDate() - new Date(this.datum).getDate()
    if ( year_diff > 4 || (year_diff == 4 && month_diff > 0) || (year_diff==4 && month_diff == 0 && day_diff >= 0 )) this.ponuda += 5000
    if ( this.snaga <= 100 ) this.ponuda += 3000
    else this.ponuda += 6000
    if ( this.teh_pregled ) this.ponuda += 6000
    if ( this.polisa ) this.ponuda += 10000

  }

  prihvati() {
    let z = new zahtev()
    z.automobil = this.auto.id
    z.datum = new Date()
    z.iznos = this.ponuda
    z.kupac = this.kupac.korisnicko_ime
    this.zahtevService.addZahtev(z).subscribe( data => {
      if ( data > 0) {
        this.prihvacen = true
      }
    })
  }

  nazad() {
    this.router.navigate(["kupac"])
  }
}
