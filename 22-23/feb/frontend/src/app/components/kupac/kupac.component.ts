import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent implements OnInit{

  kupac: Korisnik = new Korisnik();
  proizvodi: [Proizvod, boolean][] = []

  constructor( private proizvodService: ProizvodService, private router: Router) {}

  ngOnInit(): void {
    let korisnik = localStorage.getItem('logged');
    if (korisnik != null) this.kupac = JSON.parse(korisnik);
    this.proizvodService.getAll().subscribe( data => {
      if ( data ) {
        let temp = data.sort((a, b) => (a.kategorija > b.kategorija ? 1 : -1) );
        for ( let t of temp) {
          this.proizvodi.push([t, false]);
        }
      }
    })
  }

  poruka: string = ""

  poruci() {
    let cnt = 0;
    for ( let p of this.proizvodi ) {
      if ( p[1] ) cnt++;
    }
    if ( cnt == 0 ) this.poruka = "Morate dodati barem jedan proizvod";
    else {
      let temp = []
      for ( let p of this.proizvodi ) {
        if ( p[1] ) temp.push(p[0])
      }
      localStorage.setItem('proizvodi', JSON.stringify(temp));
      this.router.navigate(["poruci"]);
    }
  }
}
