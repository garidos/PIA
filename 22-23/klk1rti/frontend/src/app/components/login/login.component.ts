import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private korisnikService: KorisnikService) {}
  
  errMessage:string = ""
  lozinka: string = ""
  kor_ime: string = ""
  tip: string = ""

  login() {
    if ( this.lozinka == "" || this.kor_ime == "" || this.tip == "") this.errMessage = "Nisu unijeti svi pdoaci"
    else {
      this.korisnikService.login(this.kor_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data == null ) this.errMessage = "Neispravni podaci"
        else {
          this.errMessage = ""
          localStorage.setItem("logged", JSON.stringify(data))
          this.router.navigate([`${this.tip}`])
        }
      })
    }
  }

}
