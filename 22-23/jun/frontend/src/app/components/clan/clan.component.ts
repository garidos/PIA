import { Component, OnInit } from '@angular/core';
import { korisnik } from 'src/app/models/korisnik';
import { zadatak } from 'src/app/models/zadatak';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-clan',
  templateUrl: './clan.component.html',
  styleUrls: ['./clan.component.css']
})
export class ClanComponent implements OnInit{

  sadrzaj: string = ""
  clan: korisnik = new korisnik()
  izabran: string = ""
  clanovi: korisnik[] = []
  zadaci: zadatak[] = []

  constructor(private korisnikService: KorisnikService, private zadatakService: ZadatakService) {}

  ngOnInit(): void {
    let c = localStorage.getItem("logged")
    if ( c != null ) this.clan = JSON.parse(c)
    this.korisnikService.getClanoviTima(this.clan.tim).subscribe( data => {
      if ( data != null ) {
        this.clanovi = data
      }
    })
    this.zadatakService.getZadaciByClan(this.clan).subscribe(data => {
      if ( data != null ) {
        this.zadaci = data
      }
    })
  }

  potvrdi() {
    if ( this.sadrzaj != "" && this.izabran != "" ) {
      let zad = new zadatak()
      zad.sadrzaj = this.sadrzaj
      zad.obavljen = false
      zad.dodeljen = this.izabran
      if ( this.izabran == this.clan.korisnicko_ime ) zad.tip = "licni"
      else zad.tip = "delegiran"
      this.zadatakService.addZadatak(zad).subscribe( data => {
        if ( data > 0 ) {
          this.sadrzaj = ""
          this.izabran = ""
          if (zad.tip == "licni") this.zadaci.push(zad)
        }
      })
    } 
  }

  obrisi(z: zadatak) {
    this.zadatakService.deleteZadatak(z).subscribe( data => {
      if ( data > 0 ) {
        this.zadaci = this.zadaci.filter(zadatak => zadatak != z)
      }
    }) 
  }

  obavi(z: zadatak) {
    z.obavljen = true
    this.zadatakService.updateZadatak(z).subscribe(data => {
      if ( data == null ) {
        z.obavljen = false
      }
    })
  }

  vrati(z: zadatak) {
    z.obavljen = false
    this.zadatakService.updateZadatak(z).subscribe(data => {
      if ( data == null ) {
        z.obavljen = true
      }
    })
  }

}
