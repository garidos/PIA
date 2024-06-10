import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';
import { __propKey } from 'tslib';

@Component({
  selector: 'app-lista-zelja',
  templateUrl: './lista-zelja.component.html',
  styleUrls: ['./lista-zelja.component.css']
})
export class ListaZeljaComponent implements OnInit {

  korisnik: Korisnik = new Korisnik()
  izabran: Korisnik = new Korisnik()

  constructor(private router: Router, private korisnikService: KorisnikService) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged");
    if ( k ) this.korisnik = JSON.parse(k);
    let i = localStorage.getItem("izabran");
    if ( i ) this.izabran = JSON.parse(i);
  }


  kupi(proizvod: Proizvod, anonimno: boolean = false) {
    let poklon = new Proizvod();
    poklon.proizvod = proizvod.proizvod;
    poklon.cena = proizvod.cena;
    poklon.anonimno = anonimno;
    poklon.kupio = this.korisnik.korisnickoIme;
    this.korisnikService.kupiPoklon(this.izabran.korisnickoIme, poklon).subscribe( data => {
      if ( data > 0 ) {
        this.korisnik.naStanju -= proizvod.cena;
        this.korisnik.potroseno += proizvod.cena;
        proizvod.kupio = poklon.kupio;
        proizvod.anonimno = poklon.anonimno;
        this.update();
      }
    })
  }

  private update() {
    localStorage.setItem("logged", JSON.stringify(this.korisnik));
    localStorage.setItem("izabran", JSON.stringify(this.izabran));
  }

  nazad() {
    localStorage.removeItem('izabran');
    this.router.navigate(['registrovani']);
  }
}
