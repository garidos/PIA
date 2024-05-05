import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-pocetna',
  templateUrl: './pocetna.component.html',
  styleUrls: ['./pocetna.component.css']
})
export class PocetnaComponent {

  indeks: string = ""
  errMessage1: string = ""
  errMessage2: string = ""
  errMessage3: string = ""

  constructor(private router: Router, private studentService : StudentService) {}

  forma1() {
    if ( !this.validateIndeks() ) this.errMessage1 = "Neispravan format indeksa"
    else {
      this.studentService.getStudentByIndeks(this.indeks).subscribe( data => {
        if ( data != null ) {
          let student = data
          this.studentService.getProsjek(this.indeks).subscribe(data => {
            if ( data > 0 ) {
              localStorage.clear()
              localStorage.setItem("prosjek", data.toString());
              localStorage.setItem("selectedStudent", JSON.stringify(student))
              this.errMessage1 = ""
              this.router.navigate(["student"])
            } else {
              this.errMessage1 = "Izabrani student nema unijetih ocjena"
            }
          })
          
          
        } {
          this.errMessage1 = "Nepostojeci student"
        }
      })
     
    }
  }

  validateIndeks() {
    let pattern = /[0-9]{4}\/[0-9]{4}/
    return pattern.test(this.indeks)
  }


  datumOd: string = ""
  datumDo: string = ""

  forma2() {
    if ( !this.validateForma2() ) this.errMessage2 = "Neispravno unijeti datumi"
    else {
      localStorage.clear()
      localStorage.setItem("datumOd", this.datumOd)
      localStorage.setItem("datumDo", this.datumDo)
      this.errMessage2 = ""
      this.router.navigate(["ispiti"])
    }
    
  }

  validateForma2() {
    if ( this.datumDo == "" || this.datumOd == "" ) return false;
    return this.datumOd <= this.datumDo;
  }

  sifra: string = ""
  ocjena: number = 0

  forma3() {
    if ( !this.validateIndeks() ) this.errMessage3 = "Neispravan format indeksa"
    else if  ( !this.validateOcjena() ) this.errMessage3 = "Neispravna ocjena"
    else if ( !this.validateForma3() ) this.errMessage3 = "Sifra predmeta mora biti unijeta"
    else {
      this.errMessage3 = ""
      localStorage.clear();
      localStorage.setItem("indeks", this.indeks)
      localStorage.setItem("sifra", this.sifra)
      localStorage.setItem("ocjena", this.ocjena.toString())
      this.router.navigate(["ocjene"])
    }
  }

  validateOcjena() {
    return this.ocjena > 5 && this.ocjena <= 10
  }

  validateForma3() {
    return this.sifra != ""
  }
}
