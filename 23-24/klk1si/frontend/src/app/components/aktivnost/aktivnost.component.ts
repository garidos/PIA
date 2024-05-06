import { Component, OnInit } from '@angular/core';
import { aktivnost } from 'src/app/models/aktivnost';
import { korisnik } from 'src/app/models/korisnik';
import { PrijavaService } from 'src/app/services/prijava.service';

@Component({
  selector: 'app-aktivnost',
  templateUrl: './aktivnost.component.html',
  styleUrls: ['./aktivnost.component.css']
})
export class AktivnostComponent implements OnInit {

  errorMessage: string = ""
  aktivnost: aktivnost = new aktivnost()
  student: korisnik = new korisnik()
  prijavljen: boolean = false

  constructor(private prijavaService: PrijavaService) {
    
  }

  ngOnInit(): void {
    let akt = localStorage.getItem("aktivnost")
    if ( akt != null ) this.aktivnost = JSON.parse(akt)
    let stud = localStorage.getItem("logged")
    if ( stud != null ) this.student = JSON.parse(stud)
    this.prijavaService.checkPrijava(this.student, this.aktivnost).subscribe( data => {
      if ( data ) {
        this.prijavljen = true
        this.errorMessage = "Vec ste prijavljeni za ovu aktivnost"
      }
    })
  }

  prijava(sala: number) {
    this.prijavaService.addPrijava(this.student.korisnicko_ime, this.aktivnost.id, sala).subscribe( data => {
      if ( data > 0 ) {
        this.prijavljen = true
        this.errorMessage = "Vec ste prijavljeni za ovu aktivnost"
      }
    })
  }

}
