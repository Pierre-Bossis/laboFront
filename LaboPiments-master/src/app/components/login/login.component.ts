import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:string = ""
  password:string = ""
  constructor(private authService:AuthService, private router:Router) {
    
  }
  login() {
    this.authService.login(this.username, this.password);
    if (localStorage.getItem("role") !== null) {
      this.router.navigateByUrl("home").then(() => {
        window.location.reload();
      });
    }
  }
}
