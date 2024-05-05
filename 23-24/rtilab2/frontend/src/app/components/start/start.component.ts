import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  username: string = ""
  password: string = ""
  type: string = ""
  errorMsg: string = "Neuspjesno logovanje"
  flag: boolean = false

  constructor(private userService: UserService, private router: Router) {}

  login() {
    this.userService.login(this.username, this.password, this.type).subscribe(
      data => {
        if ( data == null) {
          this.flag = true
        } else {
          this.flag = false
          this.username = this.password = this.type = ""
          localStorage.setItem("logged", JSON.stringify(data))
          this.router.navigate([`${data.type}`])
        }
      }
    )
  }



}
