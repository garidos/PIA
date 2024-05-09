import { Component, OnInit } from '@angular/core';
import { korisnik } from 'src/app/models/korisnik';
import { zahtev } from 'src/app/models/zahtev';
import { zahtevW } from 'src/app/models/zahtevW';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ZahtevService } from 'src/app/services/zahtev.service';

@Component({
  selector: 'app-organizator',
  templateUrl: './organizator.component.html',
  styleUrls: ['./organizator.component.css']
})
export class OrganizatorComponent implements OnInit{
  organizator: korisnik = new korisnik()
  zahtevi: zahtevW[] = []
  danas: Date = new Date(2023, 6, 17)

  constructor(private zahtevService: ZahtevService, private korisnikService: KorisnikService) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.organizator = JSON.parse(k)
      this.zahtevService.getAllZahtevi().subscribe( data => {
        if ( data != null ) {
          for ( var d of data ) {
            let zw = new zahtevW()
            d.datum_do = new Date(d.datum_do)
            d.datum_od = new Date(d.datum_od)
            zw.zahtev = d
            this.korisnikService.getKorisnik(d.klijent).subscribe( data => {
              if ( data != null ) {
                zw.klijent = data
              }
            })
            this.zahtevi.push(zw)
          }
        }
      })
  }

  prihvati(z : zahtev) {
    this.zahtevService.prihvatiZahtev(z).subscribe( data => {
      if ( data > 0 ) {
        z.status = "Prihvaceno"
        for ( var zah of this.zahtevi ) {
          if ( zah.zahtev.hala == z.hala && zah.zahtev.status == 'U obradi' && !(zah.zahtev.datum_do < z.datum_od && zah.zahtev.datum_od < z.datum_od || zah.zahtev.datum_do > z.datum_do && zah.zahtev.datum_od > z.datum_do)) {
            zah.zahtev.status = "Odbijeno" 
          }
        }
      }
    })
  }
}
