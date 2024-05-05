import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ispit } from 'src/app/models/Ispit';
import { IspitService } from 'src/app/services/ispit.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-ocjene',
  templateUrl: './ocjene.component.html',
  styleUrls: ['./ocjene.component.css']
})
export class OcjeneComponent implements OnInit{

  noviIspit: ispit = new ispit()
  errMessage: string = ""
  ocjene: ispit[] = []
  set: boolean = false

  constructor(private studentService: StudentService, private ispitService: IspitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let ind = localStorage.getItem("indeks")
    if ( ind != null ) this.noviIspit.student = ind 
    let sif = localStorage.getItem("sifra")
    if ( sif != null ) this.noviIspit.sifra = sif
    let oc = localStorage.getItem("ocjena")
    if ( oc != null ) this.noviIspit.ocjena = Number.parseInt(oc)
    this.noviIspit.datum = new Date().toISOString().substring(0,10)
    this.studentService.getStudentByIndeks(this.noviIspit.student).subscribe(data => {
      if ( data == null ) this.errMessage = "Nepostojeci student"
      else {
        this.ispitService.getIspitiByStudent(this.noviIspit.student).subscribe(data => {
          if ( data != null) {
            this.ocjene = data
            for ( var ispit of this.ocjene ) {
              if ( ispit.sifra == this.noviIspit.sifra && ispit.student == this.noviIspit.student ) {
                ispit.datum = this.noviIspit.datum
                ispit.ocjena = this.noviIspit.ocjena
                this.set = true
                break
              }
            }
            if ( !this.set ) {
              this.ocjene.push(this.noviIspit)
            }
          }
        })
        this.ispitService.addIspit(this.noviIspit).subscribe( data => {
            
        })
      }
    })
  }

  nazad() {
    //localStorage.clear()
    this.router.navigate([""])
  }

}
