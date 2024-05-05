import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  implements OnInit {

  constructor(private studentService: StudentService, private router: Router) {}
  
  selectedStudent: student = new student()
  prosjek: number = 0

  ngOnInit(): void {
    let stud = localStorage.getItem("selectedStudent")
    if ( stud != null ) this.selectedStudent = JSON.parse(stud)
    let p = localStorage.getItem("prosjek")
    if ( p != null ) this.prosjek = Number.parseFloat(p);
  }

  nazad() {
    //localStorage.clear()
    this.router.navigate([""])
  }

}
