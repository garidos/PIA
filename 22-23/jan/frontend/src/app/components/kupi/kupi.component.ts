import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Agencija } from 'src/app/models/agencija';
import { Ponuda } from 'src/app/models/ponuda';
import { Putnik } from 'src/app/models/putnik';
import { Usluga } from 'src/app/models/usluga';
import { AgencijaService } from 'src/app/services/agencija.service';
import { PutnikService } from 'src/app/services/putnik.service';

@Component({
  selector: 'app-kupi',
  templateUrl: './kupi.component.html',
  styleUrls: ['./kupi.component.css']
})
export class KupiComponent {
  br: number = 0;
  putnik: Putnik = new Putnik();
  ponuda: Ponuda = new Ponuda();
  agencija: Agencija = new Agencija();

  poruka: string = "";

  constructor( private router: Router, private putnikService: PutnikService, private agencijaService: AgencijaService ) {}

  potvrdi() {
    let p = localStorage.getItem('ponuda');
    if ( p ) this.ponuda = JSON.parse(p);
    let pu = localStorage.getItem('logged');
    if ( pu ) this.putnik = JSON.parse(pu);
    let a = localStorage.getItem('agencija');
    if ( a ) this.agencija = JSON.parse(a);

    if ( (this.br + 1) * this.ponuda.cena <= this.putnik.novac && this.ponuda.broj_mesta >= this.br + 1 ) {
      let u = new Usluga();
      u.brojsaputnika = this.br;
      u.idusluge = this.ponuda.idponude;
      u.lokacija_do = this.ponuda.lokacija_do;
      u.lokacija_od = this.ponuda.lokacija_od;
      this.putnik.lista.push(u);
      this.putnik.novac -= (this.br + 1) * this.ponuda.cena;
      this.ponuda.broj_mesta -= this.br + 1;
      localStorage.setItem('logged', JSON.stringify(this.putnik));

      this.putnikService.updatePutnik(this.putnik).subscribe( data => {
      }) 
      this.agencijaService.updatePonuda(this.agencija.korisnickoIme, this.ponuda).subscribe( data => {
      })
      this.nazad();
    }
    else {
      if ( this.ponuda.broj_mesta < this.br ) this.poruka = "Agencija nema dovoljno mjesta" 
      else this.poruka = "Nemate dovoljno novca na racunu";
    }
  }

  nazad() {
    localStorage.removeItem('ponuda');
    localStorage.removeItem('agencija');
    this.router.navigate(['putnik']);
  }
}
