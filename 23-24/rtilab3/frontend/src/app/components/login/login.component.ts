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
  admin: boolean = false
  message: string = ""

  constructor(private korisnikService: KorisnikService, private router: Router) {}

  login() {
    if ( this.kor_ime == "" || this.lozinka == "" ) {
      this.message = "Nisu unijeti svi podaci"
    } else {
      let tip = (this.admin ? "administrator" : "registrovani");
      this.korisnikService.login(this.kor_ime, this.lozinka, tip).subscribe( data => {
        if ( data ) {
          this.message = "";
          localStorage.setItem("logged", JSON.stringify(data));
          this.router.navigate([`${tip}`]);
        } else {
          this.message = "Neispravni podaci";
        }
      })
    }
  }
}
