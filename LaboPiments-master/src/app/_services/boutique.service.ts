import { Injectable } from '@angular/core';
import { Piment } from '../_models/piment';

@Injectable({
  providedIn: 'root'
})
export class BoutiqueService {
panier: Piment[] = []
  constructor(){
    this.getPanierFromLocalStorage()
  }

  pushPanierToLocalStorage(){
    const data = JSON.stringify(this.panier)
    localStorage.setItem("panier",data)
  }

  addToPanier(piment:Piment){
    this.panier.push(piment)
    this.pushPanierToLocalStorage()
  }

  getPanierFromLocalStorage(){
    const data = localStorage.getItem("panier")
    if(data){
      return this.panier = JSON.parse(data)
    }
  }

  deleteFromPanier(index:number){
    this.panier.splice(index,1)
    this.pushPanierToLocalStorage()
  }
}
