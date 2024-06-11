import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private korisnikService: KorisnikService, private router: Router) { }

  ngOnInit(): void {
  }

  kor_ime: string = "";
  lozinka: string = "";
  tip: string = "";
  poruka: string = "";

  login() {
    if ( this.kor_ime == "" || this.lozinka == "" || this.tip == "") this.poruka = "Nisu unijeti svi podaci";
    else {
      this.korisnikService.login(this.kor_ime, this.lozinka, this.tip).subscribe( data => {
        if ( data ) {
          this.poruka = ""
          localStorage.setItem('logged', JSON.stringify(data));
          this.router.navigate([`${this.tip}`]);
        } else {
          this.poruka = "Neispravni podaci";
        }
      })
    }
    
  }

}
