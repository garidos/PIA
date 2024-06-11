import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PutnikService } from 'src/app/services/putnik.service';
import { AgencijaService } from 'src/app/services/agencija.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private putnikService: PutnikService, private agencijaService: AgencijaService, private router: Router) { }

  kor_ime: string = "";
  lozinka: string = "";
  tip: string = "";
  poruka: string = "";

  login() {
    if ( this.kor_ime == "" || this.lozinka == "" || this.tip == "" ) this.poruka = "Nisu unijeti svi podaci"
    else {
      if ( this.tip == "putnik") {
        this.putnikService.login(this.kor_ime, this.lozinka).subscribe( data => {
          if ( data ) {
            this.poruka = ""
            localStorage.setItem("logged", JSON.stringify(data));
            this.router.navigate(["putnik"]);
          } else {
            this.poruka = "Neispravni podaci"
          }
        })
      } else {
        this.agencijaService.login(this.kor_ime, this.lozinka).subscribe( data => {
          if ( data ) {
            this.poruka = ""
            localStorage.setItem("logged", JSON.stringify(data));
            this.router.navigate(["agencija"]);
          } else {
            this.poruka = "Neispravni podaci"
          }
        })
      }
    }
  }

}
