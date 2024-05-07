import { Component, OnInit } from '@angular/core';
import { aukcija } from 'src/app/models/aukcija';
import { aukcijaHelper } from 'src/app/models/aukcijaHelper';
import { korisnik } from 'src/app/models/korisnik';
import { umetnina } from 'src/app/models/umetnina';

import { AukcijaService } from 'src/app/services/aukcija.service';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { UmetninaService } from 'src/app/services/umetnina.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{


  aukcije: aukcijaHelper[] = []
  korisnici: Map<string,korisnik> = new Map<string, korisnik>()

  constructor(private aukcijaService: AukcijaService, private umetninaService: UmetninaService, private korisnikService: KorisnikService) {}

  ngOnInit(): void {
    this.aukcijaService.getAll().subscribe(data => {
      if ( data != null ) {
        for ( var a of data ) {
          let ah = new aukcijaHelper()
          ah.aukcija = a
          this.umetninaService.getUmetnineByAukcija(a.id).subscribe( data => {
            ah.umetnine = data
          })
          this.aukcije.push(ah)
        }
      }
    })
    this.korisnikService.getAll().subscribe( data => {
      if ( data != null ) {
        for( var k of data ) {
          this.korisnici.set(k.korisnicko_ime, k)
        }
      }
    })
  }

  checkIstekla(a: aukcija) {
    return new Date(a.kraj) <= new Date()
  }

}
