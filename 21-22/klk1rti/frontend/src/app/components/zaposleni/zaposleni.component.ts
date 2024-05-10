import { Component, OnInit } from '@angular/core';
import { korisnik } from 'src/app/models/korisnik';
import { zahtev } from 'src/app/models/zahtev';
import { zahtevAutomobil } from 'src/app/models/zahtevAutomobil';
import { AutomobilService } from 'src/app/services/automobil.service';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-zaposleni',
  templateUrl: './zaposleni.component.html',
  styleUrls: ['./zaposleni.component.css']
})
export class ZaposleniComponent implements OnInit {

  zaposleni: korisnik = new korisnik()
  zahtevi: zahtevAutomobil[] = []

  constructor(private zahtevService: ZahtevService, private automobilService: AutomobilService) {
    
  }

  ngOnInit(): void {
    this.zahtevService.getAllZahtevi().subscribe( data => {
      if ( data != null ) {
        for ( var d of data ) {
          let za = new zahtevAutomobil()
          za.zahtev = d
          this.automobilService.getAutomobil(d.automobil).subscribe( data2 => {
            if ( data2 != null ) {
              za.automobil = data2
            }
          })
          this.zahtevi.push(za)
        }
      }
    })
  }

  obrisi(z: zahtev) {
    this.zahtevService.deleteZahtev(z.id).subscribe( data => {
      if ( data > 0 ) {
        this.zahtevi = this.zahtevi.filter( zah => zah.zahtev != z)
      }
    })
  }

}
