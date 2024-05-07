import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { korisnik } from 'src/app/models/korisnik';
import { objekat } from 'src/app/models/objekat';
import { posao } from 'src/app/models/posao';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ObjekatService } from 'src/app/services/objekat.service';
import { PosaoService } from 'src/app/services/posao.service';

@Component({
  selector: 'app-dizajner',
  templateUrl: './dizajner.component.html',
  styleUrls: ['./dizajner.component.css']
})
export class DizajnerComponent implements OnInit{
  errMessage: string = ""

  dizajner: korisnik = new korisnik()
  trenutni_posao: posao = new posao()
  klijent: korisnik = new korisnik()
  objekat: objekat = new objekat()

  constructor(private posaoService: PosaoService, private router: Router,
    private objekatService: ObjekatService, private korisnikService: KorisnikService
  ) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.dizajner = JSON.parse(k)
    this.posaoService.getPosaoByDizajner(this.dizajner).subscribe( data => {
      if ( data != null ) {
        this.trenutni_posao = data;
        this.objekatService.getObjekatById(this.trenutni_posao.id).subscribe( data => {
          if ( data != null ) {
            this.objekat = data
            this.korisnikService.getKorisnikByKorIme(this.trenutni_posao.klijent).subscribe( data => {
              if ( data != null ) {
                this.klijent = data
              }
            })
          }
        })
      } else {
        this.errMessage = "Trenutno nema posla!"
      }
    })
  }

  napredak() {
    this.posaoService.changeProgres(1, this.trenutni_posao).subscribe( data => {
      if ( data > 0 ) {
        this.trenutni_posao.progres++
      }
    })
  }

  zavrsi() {
    this.posaoService.deletePosao(this.trenutni_posao).subscribe( data => {
      if ( data > 0 ) {
        this.objekatService.changeStanje(this.objekat, "renoviran").subscribe( data => {
          if ( data > 0 ) {
            this.errMessage = "Trenutno nema posla!"
          }
        })
        
      }
    })
  }

}
