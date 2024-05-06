import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent {

  korisnicko_ime: string = ""
  lozinka: string = ""
  tip: string = ""
  errorMessage: string = ""

  constructor(private korisnikService: KorisnikService, private router: Router) {}

  login() {
    if ( this.korisnicko_ime == "" || this.lozinka == "" || this.tip == "") this.errorMessage = "Nisu unijeti svi podaci"
    else {
      this.korisnikService.login(this.korisnicko_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data != null ) {
          this.errorMessage = ""
          localStorage.setItem("logged", JSON.stringify(data))
          this.router.navigate([`${this.tip}`])
        } else {
          this.errorMessage = "Neispravni podaci"
        }
      })
    }
  }
}
