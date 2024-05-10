import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from 'src/app/services/korisnik.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  type: string = ""
  message: string = "";

  constructor(private router: Router, private korisnikService: KorisnikService) {
    
  }

  login(){
    if ( this.username == "" || this.password == "" || this.type == "" ) this.message = "Nisu unijeti svi podaci"
    else {
      this.korisnikService.login(this.username, this.password, this.type).subscribe(
        data=>{
          if(data==null){
            this.message = "Neispravni podaci"
          }
          else{
            this.message = ""
            localStorage.setItem("logged", JSON.stringify(data))
            this.router.navigate([`${this.type}`])
          }
        }
      )}
    }
    
}
