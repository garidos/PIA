import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { automobil } from 'src/app/models/automobil';
import { korisnik } from 'src/app/models/korisnik';
import { AutomobilService } from 'src/app/services/automobil.service';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{

  kupac: korisnik = new korisnik()
  automobili: automobil[] = []
  izabran_automobil: string = ""
  datum: string = ""
  snaga: number = 0
  teh_pregled: boolean = false
  polisa: boolean = false

  constructor(private router: Router, private automobilService: AutomobilService) {
    
  }

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null) this.kupac = JSON.parse(k)
    this.automobilService.getAllAutomobili().subscribe( data => {
      if ( data != null ) {
        this.automobili = data
      }
    })
    if ( localStorage.getItem("auto") != null ) {
      let a = localStorage.getItem("auto")
      if ( a != null ) {
        var auto: automobil = JSON.parse(a)
        this.izabran_automobil = auto.marka
      }
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
    }
  }

  izracunaj() {
    if ( new Date(this.datum) < new Date() && this.snaga >= 50 && this.izabran_automobil != "") {
      for ( var a of this.automobili ) {
        if ( a.marka == this.izabran_automobil ) {
          localStorage.setItem("auto", JSON.stringify(a))
          break
        }
      }
      console.log(this.izabran_automobil)
      localStorage.setItem("datum", this.datum)
      localStorage.setItem("snaga", this.snaga.toString())
      localStorage.setItem("teh_pregled", (this.teh_pregled?"da":"ne"))
      localStorage.setItem("polisa", (this.polisa?"da":"ne"))
      this.router.navigate(["ponuda"])
    } 
  }
}
