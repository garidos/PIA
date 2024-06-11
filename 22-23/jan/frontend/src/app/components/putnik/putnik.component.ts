import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Agencija } from 'src/app/models/agencija';
import { Ponuda } from 'src/app/models/ponuda';
import { Putnik } from 'src/app/models/putnik';
import { Usluga } from 'src/app/models/usluga';
import { AgencijaService } from 'src/app/services/agencija.service';
import { PutnikService } from 'src/app/services/putnik.service';

@Component({
  selector: 'app-putnik',
  templateUrl: './putnik.component.html',
  styleUrls: ['./putnik.component.css']
})
export class PutnikComponent implements OnInit{
  putnik: Putnik = new Putnik;
  lokacije: Set<string> = new Set<string>()
  agencije: Map<number, [Agencija, Ponuda]> = new Map<number, [Agencija, Ponuda]>()

  ngOnInit(): void {
    let a = localStorage.getItem('logged');
    if ( a) this.putnik = JSON.parse(a);
    for ( let u of this.putnik.lista) {
      this.lokacije.add(u.lokacija_do);
      this.lokacije.add(u.lokacija_od);
    }
    this.lokacije.add(this.putnik.lokacijatrenutna);
    this.agencijaService.getAll().subscribe( data => {
      for ( let a of data ) {
        for ( let p of a.usluge ) {
          this.agencije.set(p.idponude, [a, p]);
        }
      }
    })
  }

  constructor(private putnikService: PutnikService, private agencijaService: AgencijaService,
    private router: Router
  ) {
    
  }

  update() {
    localStorage.setItem('logged', JSON.stringify(this.putnik)); 
    this.putnikService.updatePutnik(this.putnik).subscribe( data => {
      if ( data > 0 ) {

      }
    }) 
  }

  tipovi: string[] = []
  destinacija: string = ""
  cena_od: number = 0
  cena_do: number = 0
  ponude: Ponuda[] = []

  pronadji() {
    if ( this.tipovi.length > 0 ) {
      var flags: boolean[] = [false, false, false];
      for ( let t of this.tipovi) {
        if ( t == "brzivoz" ) flags[0] = true;
        if ( t == "aviokarta" ) flags[1] = true;
        if ( t == "hotel" ) flags[2] = true;
      }
      this.agencijaService.search(this.putnik.lokacijatrenutna, this.destinacija, flags[0], flags[1], flags[2], this.cena_od, this.cena_do).subscribe( data => {
        this.ponude = data;
      })
    } 
  }

  search() {
    if ( this.tipovi.length > 0 ) {
      this.agencijaService.getAllPonude().subscribe( data => {
        this.ponude = data.filter( p => {
          if ( p.cena < this.cena_od || p.cena > this.cena_do ) return false;
          if ( !this.tipovi.find( x => x == p.tip ) ) return false;
          if ( p.tip != "hotel" && p.lokacija_od != this.putnik.lokacijatrenutna ) return false;
          if ( this.destinacija != "" ) {
            let regex = new RegExp(this.destinacija, 'i');
            if ( !regex.exec(p.lokacija_do) ) return false;
          }
          return true;
        })
      })
    } 
  }
  
  kupi(p: Ponuda) {
    localStorage.setItem('ponuda', JSON.stringify(p));
    localStorage.setItem('agencija', JSON.stringify(this.agencije.get(p.idponude)?.[0]));
    this.router.navigate(['kupi']);
  }
}
