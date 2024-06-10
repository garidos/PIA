import { Component, OnInit } from '@angular/core';
import { Korisnik } from 'src/app/models/korisnik';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  korisnici: Korisnik[] = []

  constructor(private korisnikService: KorisnikService) {}

  ngOnInit(): void {
    this.korisnikService.getAllRegistrovani().subscribe( data => {
      if ( data ) {
        this.korisnici = data.sort((a, b) => b.potroseno - a.potroseno );
      }
    })
  }

  uplati(korisnik: Korisnik) {
    this.korisnikService.updateKorisnik(korisnik).subscribe( data => {
      if ( data > 0 ) {
        korisnik.naStanju += 5000;
      }
    })
  }
}
