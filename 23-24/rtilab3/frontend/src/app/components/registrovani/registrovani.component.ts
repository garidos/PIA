import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-registrovani',
  templateUrl: './registrovani.component.html',
  styleUrls: ['./registrovani.component.css']
})
export class RegistrovaniComponent implements OnInit{

  korisnik: Korisnik = new Korisnik();
  ostali: Korisnik[] = []

  constructor(private korisnikService: KorisnikService, private router: Router) {}

  ngOnInit(): void {
    let k = localStorage.getItem("logged")
    if ( k ) this.korisnik = JSON.parse(k)
    this.korisnikService.getAllRegistrovani().subscribe( data => {
      if ( data ) {
        this.ostali = data.filter(kor => kor.korisnickoIme != this.korisnik.korisnickoIme )
      }
    })
  }

  naziv: string = ""
  cijena: number = 0

  dodaj() {
    if ( this.naziv != "" && this.cijena != 0 ) {
      this.korisnikService.addProizvod(this.korisnik.korisnickoIme, this.naziv, this.cijena).subscribe( data => {
        if ( data > 0 ) {
          var proizvod : Proizvod = new Proizvod();
          proizvod.proizvod = this.naziv;
          proizvod.cena = this.cijena;
          this.korisnik.lista.push(proizvod);
          this.update();
        }
      })
    }
  }

  private update() {
    localStorage.setItem("logged", JSON.stringify(this.korisnik));
  }

  izabran: string = ""

  vidiListu() {
    if ( this.izabran != "" ) {
      this.korisnikService.getKorisnik(this.izabran).subscribe( data => {
        if ( data ) {
          localStorage.setItem("izabran", JSON.stringify(data));
          this.router.navigate(["listaZelja"]);
        }
      })
    }
  }
}
