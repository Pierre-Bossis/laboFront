import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
panier: any[] = []
totalPanier:number = 0
  constructor(){
    this.getPanierFromLocalStorage()
  }

  pushPanierToLocalStorage(){
    const data = JSON.stringify(this.panier)
    localStorage.setItem("panier",data)    
    localStorage.setItem("total",this.totalPanier.toString())
  }

  addToPanier(article:any){
    this.panier.push(article)
    this.pushPanierToLocalStorage()
  }

  getPanierFromLocalStorage(){
    const total = localStorage.getItem("total")
    if(total)
      this.totalPanier = parseFloat(total)    

    const data = localStorage.getItem("panier")
    if(data)
      return this.panier = JSON.parse(data)
    
  }

  deleteFromPanier(index:number){
    this.panier.splice(index,1)
    this.pushPanierToLocalStorage()
  }
}
