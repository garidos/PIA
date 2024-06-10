import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  kor_ime: string = ""
  lozinka: string = ""
  tip: string = ""
  message: string = ""

  constructor(private korisnikServiec: KorisnikService, private router: Router) {}

  login() {
    if ( this.kor_ime == "" || this.lozinka == "" || this.tip == "" ) this.message = "Nisu unijeti svi podaci"
    else {
      this.korisnikServiec.login(this.kor_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data ) {
          this.message = ""
          localStorage.setItem('logged', JSON.stringify(data));
          this.router.navigate([`${this.tip}`]);
        } else {
          this.message = "Neispravni podaci"
        }
      })
    }
  }
}
