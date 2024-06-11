import { Component, OnInit } from '@angular/core';
import { Agencija } from 'src/app/models/agencija';
import { Ponuda } from 'src/app/models/ponuda';
import { AgencijaService } from 'src/app/services/agencija.service';

@Component({
  selector: 'app-agencija',
  templateUrl: './agencija.component.html',
  styleUrls: ['./agencija.component.css']
})
export class AgencijaComponent implements OnInit{
  ngOnInit(): void {
    let a = localStorage.getItem('logged');
    if ( a) this.agencija = JSON.parse(a);
  }

  constructor(private agencijaService: AgencijaService) {
    
  }

  agencija: Agencija = new Agencija();

  tip: string = ""
  lokacija_od: string = ""
  lokacija_do: string = ""
  period: string = ""
  cena: number = 0
  broj_mesta: number = 0
  poruka:string = ""

  update() {
    localStorage.setItem('logged', JSON.stringify(this.agencija));
  }

  dodaj() {
    if ( this.tip == "" ) this.poruka = "Nije popunjeno polje Tip";
    else if ( this.lokacija_do == "" ) this.poruka = "Nije popunjeno polje Lokacija do";
    else if ( this.lokacija_od == "" && this.tip != "hotel" ) this.poruka = "Nije popunjeno polje Lokacija od";
    else if ( this.period == "" ) this.poruka = "Nije popunjeno polje Period";
    else if ( this.cena == 0 ) this.poruka = "Nije popunjeno polje Cijena";
    else if ( this.broj_mesta == 0 ) this.poruka = "Nije popunjeno polje Broj mjesta";
    else if ( this.cena < 0 ) this.poruka = "Cijena mora biti pozitivan broj";
    else if ( this.broj_mesta < 0 ) this.poruka = "Broj mjesta mora biti pozitivan broj";
    else {
      var p : Ponuda = {idponude: 0, tip: this.tip, lokacija_do: this.lokacija_do, lokacija_od: this.lokacija_od, period: this.period,
        cena: this.cena, broj_mesta: this.broj_mesta
      };
      this.agencijaService.addPonuda(p, this.agencija.korisnickoIme).subscribe( data => {
        if ( data > 0 ) {
          this.poruka = this.tip = this.lokacija_do = this.lokacija_od = this.period = "";
          this.cena = this.broj_mesta = 0;
          this.agencija.usluge.push(p);
          this.update();
        }
      })
    }
  }
}
