import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Narudzbina } from 'src/app/models/narudzbina';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-poruci',
  templateUrl: './poruci.component.html',
  styleUrls: ['./poruci.component.css']
})
export class PoruciComponent implements OnInit{
  
  kupac: Korisnik = new Korisnik()
  proizvodi: [Proizvod, number][] = []

  constructor(private narudzbinaService: NarudzbinaService, private korisnikService: KorisnikService,
    private proizvodService: ProizvodService
  ) {
    
  }
  
  ngOnInit(): void {
    let korisnik = localStorage.getItem('logged');
    if (korisnik != null) this.kupac = JSON.parse(korisnik);
    let p = localStorage.getItem('proizvodi');
    let temp = [];
    if (p ) temp = JSON.parse(p);
    for ( let t of temp ) {
      this.proizvodi.push([t, 0]);
    }
  }

  poruka: string = ""

  gotovo() {
    let n = new Narudzbina()
    n.kupac = this.kupac.kor_ime;

    for ( let p of this.proizvodi ) {
      if ( p[1] != 0 ) {
        n.racun += p[0].cena * p[1];
        p[0].stanje -= p[1];
        n.proizvodi.push({naziv: p[0].naziv, kolicina: String(p[1])});
      }
    }


    this.narudzbinaService.addNarudzbina(n).subscribe( data => {
      if ( data > 0 ) { // data == id
        this.kupac.narudzbine.push({idN: data});
        this.korisnikService.updateKorisnik(this.kupac).subscribe( data => {
          if ( data > 0 ) {
            for ( let p of this.proizvodi ) {
              this.proizvodService.updateProizvod(p[0]).subscribe( data => {})
            }

            this.update();
            this.poruka = "Ukupna cijena je " + n.racun + " RSD"
          }
        })
      }
    })
  }

  update() {
    localStorage.setItem('logged', JSON.stringify(this.kupac));
    let temp = []
      for ( let p of this.proizvodi ) {
        temp.push(p[0])
      }
    localStorage.setItem('proizvodi', JSON.stringify(temp));
  }

}
