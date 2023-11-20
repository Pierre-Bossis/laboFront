import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  connectAs:string = ''
  constructor(private authService:AuthService) { }
  ngOnInit(): void {
    const role = localStorage.getItem("role");
    if (role !== null) {
      this.connectAs = role;
    }
  }

  logout(){
    this.authService.logout()
    this.connectAs = ''
  }
}
