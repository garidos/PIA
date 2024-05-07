import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  korisnicko_ime: string = ""
  lozinka: string = ""
  tip: string = ""
  errMessage: string = ""

  constructor(private korisnikService: KorisnikService, private router: Router) {

  }

  login() {
    if ( this.korisnicko_ime == "" || this.lozinka == "" || this.tip == "") {
      this.errMessage = "Nisu unjeti svi podaci" 
    } else {
      this.korisnikService.login(this.korisnicko_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data != null ) {
          this.errMessage = ""
          localStorage.setItem("logged", JSON.stringify(data))
          this.router.navigate([`${this.tip}`])
        } else {
          this.errMessage = "Neispravni podaci"
        }
      })
    }
  }
}
