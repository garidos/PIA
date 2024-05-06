import { Component, OnInit } from '@angular/core';
import { aktivnost } from 'src/app/models/aktivnost';
import { korisnik } from 'src/app/models/korisnik';
import { AktivnostService } from 'src/app/services/aktivnost.service';
import { SalaService } from 'src/app/services/sala.service';

@Component({
  selector: 'app-nastavnik',
  templateUrl: './nastavnik.component.html',
  styleUrls: ['./nastavnik.component.css']
})
export class NastavnikComponent implements OnInit{


  aktivnosti: aktivnost[] = []
  nastavnik: korisnik = new korisnik()
  sale: number[] = []

  constructor(private aktivnostService: AktivnostService, private salaService: SalaService) {}

  ngOnInit(): void {
    let logged = localStorage.getItem("logged")
    if ( logged != null ) this.nastavnik = JSON.parse(logged)
    this.aktivnostService.getAktivnostiByAutor(this.nastavnik).subscribe( data => {
      if ( data != null ) {
        this.aktivnosti = data
      }
    })
    for ( let i = 0; i < 3; i++) {
      this.salaService.getBrojMjesta(i+1).subscribe(data => {
        if ( data > 0 ) {
          this.sale[i] = data
        } 
      })
    }
  }

  promjeniStatus(a: aktivnost) {
    let status = a.status
    if ( status == 0 ) status = 1
    else status = 0 
    this.aktivnostService.changeStatus(a.id, status).subscribe( data => {
      if ( data > 0 ) {
        a.status = status
      }
    })
  }

  naziv: string = ""
  datum_vreme: string = ""
  sale_check: boolean[] = [false, false, false]

  dodaj() {
    let a = new aktivnost()
    a.id = 0
    a.datum_vreme = this.datum_vreme
    a.naziv = this.naziv
    a.napravio = this.nastavnik.korisnicko_ime
    a.status = 1
    if ( this.sale_check[0] ) a.sala1 = this.sale[0]
    else a.sala1 = -1
    if ( this.sale_check[1] ) a.sala2 = this.sale[1]
    else a.sala2 = -1
    if ( this.sale_check[2] ) a.sala3 = this.sale[2]
    else a.sala3 = -1
    this.aktivnostService.dodajAktivnst(a).subscribe( data => {
      if ( data > 0 ) {
        this.aktivnosti.push(a)
      }
    })
  }

}
