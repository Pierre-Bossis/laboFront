import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  connectAs:string = ""

  adminUsername:string = "admin"
  adminPassword:string = "admin"

  clientUsername:string = "client"
  clientPassword:string = "client"
  constructor() { }

  login(username:string,password:string){
    if(username == this.adminUsername && password == this.adminPassword){
      this.connectAs = "admin"
      localStorage.setItem("role","admin")    
    }
    if(username == this.clientUsername && password == this.clientPassword){
      this.connectAs = "client"
      localStorage.setItem("role","client")
      
      
    }
  }

  logout(){
    localStorage.clear()
    this.connectAs = ""
  }
}
