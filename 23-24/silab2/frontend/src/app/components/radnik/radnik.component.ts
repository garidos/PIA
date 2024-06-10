import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { Proizvod } from 'src/app/models/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-radnik',
  templateUrl: './radnik.component.html',
  styleUrls: ['./radnik.component.css']
})
export class RadnikComponent implements OnInit{

  constructor(private proizvodService: ProizvodService) {}
  
  ngOnInit(): void {
    let r = localStorage.getItem('logged');
    if ( r ) this.radnik = JSON.parse(r);
    this.proizvodService.getAll().subscribe( data => {
      if ( data ) {
        this.proizvodi = data.filter( p => p.status == 'na cekanju');
      }
    })
  }

  proizvodi: Proizvod[] = []
  radnik: Korisnik = new Korisnik();


  odobri(p: Proizvod) {
    p.status = 'u prodavnici';
    this.proizvodService.updateProizvod(p).subscribe( data => {
      if ( data > 0 ) {
        this.proizvodi = this.proizvodi.filter(pr => pr != p );
      }
    })
  }

  odbij(p: Proizvod) {
    p.status = 'odbijeno';
    p.cena = 0;
    this.proizvodService.updateProizvod(p).subscribe( data => {
      if ( data > 0 ) {
        this.proizvodi = this.proizvodi.filter(pr => pr != p );
      }
    })
  }
}
