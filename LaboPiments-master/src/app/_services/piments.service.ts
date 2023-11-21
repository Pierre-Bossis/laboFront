import { Injectable } from '@angular/core';
import { Piment } from '../_models/piment';

@Injectable({
  providedIn: 'root'
})
export class PimentsService {

  listePiments:Piment[] = []
  constructor()
  {
    //initialise la liste de base, si elle existe deja en localstorage, on ne fait rien
    this.listePiments.push(
      { id: 1, nom: "Poivron", scoville: "0 - 100", categorie: "light",description: "Le poivron est un piment doux et coloré souvent utilisé dans divers plats pour ajouter de la saveur sans piquant." },
      { id: 2, nom: "Anaheim", scoville: "500 - 1000", categorie: "light",description: "L'Anaheim est un piment légèrement piquant, utilisé pour sa saveur et son piquant modéré dans diverses cuisines." },
      { id: 3, nom: "Ancho", scoville: "1000 - 1500", categorie: "medium",description: "L'Ancho est un piment moyennement piquant, offrant une saveur riche et fruitée souvent utilisée dans les sauces et les plats." },
      { id: 4, nom: "Chimayo", scoville: "2500 - 5000", categorie: "medium",description: "Le Chimayo est un piment avec un niveau de piquant moyen à élevé, apportant une chaleur prononcée aux plats." },
      { id: 5, nom: "Fatali", scoville: "125 000 - 325 000", categorie: "hot",description: "Le Fatali est un piment très piquant avec des notes fruitées, utilisé avec précaution pour ajouter un niveau de chaleur élevé aux plats." },
      { id: 6, nom: "Scorpion", scoville: "1 250 000", categorie: "hot",description: "Le Scorpion est parmi les piments les plus piquants, offrant une chaleur intense souvent utilisée dans des sauces et des aliments très épicés." },
      { id: 7, nom: "Regret", scoville: "9 000 000", categorie: "extreme",description: "Le Regret est l'un des piments les plus forts du monde, offrant une chaleur extrême. Utilisé avec une extrême précaution dans l'alimentation." },
      { id: 8, nom: "Capsaïcine pur", scoville: "10 000 000 - 14 000 000", categorie: "elemental",description: "La capsaïcine pure est l'élément responsable de la chaleur dans les piments. À des niveaux aussi élevés, elle est principalement utilisée à des fins scientifiques ou médicinales." },
    )
    
    if(localStorage.getItem("listePiments") == null)
      this.pushToLocalStorage()
  }

  //ajouter un pimennt a la liste et la push sur le localstorage
  addToListePiments(piment:Piment){
    piment.id = this.listePiments.length+1
    this.listePiments.push(piment)
    this.pushToLocalStorage()
  }

  //push la liste su le localstorage
  private pushToLocalStorage(){
    const data = JSON.stringify(this.listePiments)
    localStorage.setItem("listePiments",data)
  }

  //récupérer la liste depuis le localstorage et l'attribuer a une propriété
  getFromLocalStorage(){
    const data = localStorage.getItem("listePiments")
    if(data){
      return this.listePiments = JSON.parse(data)
    }
  }
}
