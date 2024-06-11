import { Component, OnInit } from '@angular/core';
import { Narudzbina } from 'src/app/models/narudzbina';
import { Proizvod } from 'src/app/models/proizvod';
import { NarudzbinaService } from 'src/app/services/narudzbina.service';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-prodavac',
  templateUrl: './prodavac.component.html',
  styleUrls: ['./prodavac.component.css']
})
export class ProdavacComponent implements OnInit{

  constructor ( private narudzbinaService: NarudzbinaService, private proizvodService: ProizvodService ) {};

  ngOnInit(): void {
    this.narudzbinaService.getAll().subscribe( data => {
      this.narudzbine = data;
      for ( let d of data ) {
        let sum = 0;
        for (let p of d.proizvodi ) { sum += Number(p.kolicina) };
        d.suma = sum;
      }
    })  
    this.proizvodService.getAll().subscribe( data => {
      for ( let d of data ) {
        this.proizvodi = data;
      }
    })
  }

  narudzbine: Narudzbina[] = []
  proizvodi: Proizvod[] = []

  dodaj(p : Proizvod) {
    let pr = new Proizvod();
    pr.cena = p.cena;
    pr.kategorija = p.kategorija;
    pr.naziv = p.naziv;
    pr.stanje = p.stanje + p.add;

    this.proizvodService.updateProizvod(pr).subscribe( data => {
      if ( data > 0 ) {
        p.stanje += p.add;
        p.add = 0;
      }
    })
  }

}
