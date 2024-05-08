import { Component, OnInit } from '@angular/core';
import { korisnik } from 'src/app/models/korisnik';
import { korisnikH } from 'src/app/models/korisnikH';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ZadatakService } from 'src/app/services/zadatak.service';

@Component({
  selector: 'app-vodja',
  templateUrl: './vodja.component.html',
  styleUrls: ['./vodja.component.css']
})
export class VodjaComponent implements OnInit{

  constructor(private korisnikService: KorisnikService, private zadatakService: ZadatakService) {}

  vodja: korisnik = new korisnik()
  clanovi: korisnikH[] = []
  
  ngOnInit(): void {
    let c = localStorage.getItem("logged")
    if ( c != null ) this.vodja = JSON.parse(c)
    this.korisnikService.getClanoviTima(this.vodja.tim).subscribe( data => {
      if ( data != null ) {
        for ( var c of data ) {
          let kh = new korisnikH()
          kh.korisnik = c
          this.zadatakService.getZadaciByClan(c).subscribe( data2 => {
            if ( data2 != null ) {
              kh.brojObavljenih = data2.filter(z => z.obavljen == true).length
              this.clanovi.push(kh)
            }  
          })
        }
      }
    })
    
  }


}
