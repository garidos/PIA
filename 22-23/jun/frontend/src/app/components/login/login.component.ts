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
  errMessage: string = ""

  constructor(private router: Router, private korisnikService: KorisnikService) {}

  login() {
    if ( this.kor_ime == "" || this.lozinka == "" || this.tip == "") this.errMessage = "Nisu unijeti svi podaci"
    else {
      this.korisnikService.login(this.kor_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data == null ) this.errMessage = "Neispravni podaci"
        else {
          localStorage.setItem("logged", JSON.stringify(data))
          this.router.navigate([`${this.tip}`])
        }
      })
    }
  }

}
