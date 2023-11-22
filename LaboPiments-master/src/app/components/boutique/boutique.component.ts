import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Piment } from 'src/app/_models/piment';
import { Sauce } from 'src/app/_models/sauce';
import { BoutiqueService } from 'src/app/_services/boutique.service';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {
piments:Piment[] = []
pimentsSorted:Piment[] = []
sauces:Sauce[] = []
saucesSorted:Sauce[] = []
search:string = "tout"
panierItem:any[] = []
totalPanier:number = 0

constructor(private pimentService:PimentsService,private boutiqueService:BoutiqueService, private route:Router){}
  ngOnInit(): void {
    //tout initialiser du localStorage
    this.piments = this.pimentService.getFromLocalStorage()
    this.pimentsSorted = this.piments

    this.sauces = this.pimentService.listeSauces
    this.saucesSorted = this.sauces

    this.panierItem = this.boutiqueService.getPanierFromLocalStorage()
    this.totalPanier = this.boutiqueService.totalPanier
  }

  searchResult(){
    if(this.search != "tout"){
      this.pimentsSorted = this.piments.filter(x=>x.categorie == this.search)
      this.saucesSorted = this.sauces.filter(x=>x.categorie == this.search)
    }
    else{
      this.pimentsSorted = this.piments
      this.saucesSorted = this.sauces
    }

  }

  goToArticleDetails(index:number){
    this.route.navigate(["boutique/article",index])    
  }

  add(article:any){
    this.totalPanier += parseFloat(article.prix)
    this.totalPanier = +this.totalPanier.toFixed(2);
    this.boutiqueService.totalPanier = this.totalPanier

    this.boutiqueService.addToPanier(article)
    //permet d'actualiser la liste (utile pour le compteur)
    this.panierItem = this.boutiqueService.getPanierFromLocalStorage()
  }

  delete(index:number,prix:number){    
    this.totalPanier -= prix
    this.totalPanier = +this.totalPanier.toFixed(2);
    this.boutiqueService.totalPanier = this.totalPanier
    
    this.boutiqueService.deleteFromPanier(index)
  }

}
