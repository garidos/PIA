import { Component, OnInit } from '@angular/core';
import { hala } from 'src/app/models/hala';
import { korisnik } from 'src/app/models/korisnik';
import { zahtev } from 'src/app/models/zahtev';
import { HalaService } from 'src/app/services/hala.service';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-klijent',
  templateUrl: './klijent.component.html',
  styleUrls: ['./klijent.component.css']
})
export class KlijentComponent implements OnInit {

  klijent: korisnik = new korisnik()

  constructor(private zahtevService: ZahtevService, private halaService: HalaService) {}

  datumOd: Date = new Date()
  datumDo: Date = new Date()
  naziv: string = ""
  broj_ljudi: number = 0
  hala: string = ""

  slobodne_hale: hala[] = []

  zahtevi: zahtev[] = []

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.klijent = JSON.parse(k)
    this.zahtevService.getZahteviByKlijent(this.klijent).subscribe( data => {
      if ( data != null ) {
        this.zahtevi = data
      }
    })
  }

  potvrdi() {
    let z = new zahtev()
    z.broj_ljudi = this.broj_ljudi;
    z.datum_do = this.datumDo
    z.datum_od = this.datumOd
    z.hala = this.hala
    z.klijent = this.klijent.kor_ime
    z.naziv = this.naziv
    z.status = "U obradi"
    this.zahtevService.addZahtev(z).subscribe( data => {
      if ( data > 0 ) {
        this.zahtevi.push(z)
        this.naziv = ""
        this.broj_ljudi = 0
        this.datumDo = new Date()
        this.datumOd = new Date()
      }
    })
  }

  update() {
    if ( this.validate() ) {
      this.halaService.getSlobodneHale(this.datumOd, this.datumDo, this.broj_ljudi).subscribe( data => {
        if ( data != null ) {
          this.slobodne_hale = data
        }
      })
    }
  }

  validate() {
    if ( this.naziv == "" ) return false;
    //if ( new Date(this.datumOd) <= new Date() ) return false;
    if ( this.datumOd >= this.datumDo ) return false;
    return true;
  }


}
