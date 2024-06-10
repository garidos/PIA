import { Component } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-kupac',
  templateUrl: './kupac.component.html',
  styleUrls: ['./kupac.component.css']
})
export class KupacComponent {
  constructor(private proizvodService: ProizvodService, private korisnikService: KorisnikService) {}
  
  ngOnInit(): void {
    let r = localStorage.getItem('logged');
    if ( r ) this.kupac = JSON.parse(r);
    this.proizvodService.getAll().subscribe( data => {
      if ( data ) {
        this.proizvodi = data.filter( p => p.status == 'u prodavnici').sort( (a, b) => b.lajkovi - a.lajkovi );
      }
    })
    this.korisnikService.getAll().subscribe( data => {
      for ( let k of data ) {
        this.korisnici.set(k.kor_ime, k);
      }
    })
  }

  proizvodi: Proizvod[] = []
  korisnici: Map<string, Korisnik> = new Map<string, Korisnik>()
  kupac: Korisnik = new Korisnik();

  like(p : Proizvod) {
    var pr: Proizvod = { id: p.id, naziv: p.naziv, cena: p.cena, opis: p.opis, kreator: p.kreator, lajkovi: p.lajkovi + 1, status: p.status};
    this.proizvodService.updateProizvod(pr).subscribe( data => {
      if ( data > 0 ) {
        p.lajkovi++;
        this.proizvodi = this.proizvodi.sort((a, b) => b.lajkovi - a.lajkovi );
      }
    })
  }

  naziv: string = ""
  opis: string = ""

  dodaj() {
    var p: Proizvod = { id: 0, naziv: this.naziv, opis: this.opis, cena: 0, kreator: this.kupac.kor_ime, lajkovi: 0, status: 'na cekanju'};
    this.proizvodService.addProizvod(p).subscribe( data => {
      if ( data > 0 ) {
        this.naziv = ""
        this.opis = ""
      }
    })
  }
}
