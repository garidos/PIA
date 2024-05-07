import { Component, OnInit } from '@angular/core';
import { korisnik } from 'src/app/models/korisnik';
import { objekat } from 'src/app/models/objekat';
import { posao } from 'src/app/models/posao';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ObjekatService } from 'src/app/services/objekat.service';
import { PosaoService } from 'src/app/services/posao.service';

@Component({
  selector: 'app-renoviraj',
  templateUrl: './renoviraj.component.html',
  styleUrls: ['./renoviraj.component.css']
})
export class RenovirajComponent implements OnInit{
  klijent: korisnik = new korisnik()
  izabran: objekat = new objekat()
  dizajneri: korisnik[] = []
  izabran_dizajner: string = ""
  closed: boolean = false

  constructor(private korisnikService: KorisnikService,
    private posaoService: PosaoService,
    private objekatService: ObjekatService
  ) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k != null ) this.klijent = JSON.parse(k)
    let i = localStorage.getItem("objekat")
    if ( i != null ) this.izabran = JSON.parse(i)
    this.korisnikService.getSlobodniDizajneri().subscribe( data => {
      if ( data != null ) {
        this.dizajneri = data
      }
    })
  }

  izaberi() {
    let p = new posao()
    p.dizajner = this.izabran_dizajner
    p.klijent = this.klijent.kor_ime
    p.objekat = this.izabran.id
    p.progres = 0
    this.posaoService.addPosao(p).subscribe( data => {
      if ( data > 0 ) {
        this.objekatService.changeStanje(this.izabran, "u toku renoviranje").subscribe( data => {
          if ( data > 0 ) {
            this.closed = true
          }
        })
      }
    })
  }

}
