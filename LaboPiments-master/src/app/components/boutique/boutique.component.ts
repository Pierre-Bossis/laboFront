import { Component, OnInit } from '@angular/core';
import { Piment } from 'src/app/_models/piment';
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
search:string = "tout"
panierItem:Piment[] = []

constructor(private pimentService:PimentsService,private boutiqueService:BoutiqueService){}
  ngOnInit(): void {
    this.piments = this.pimentService.getFromLocalStorage()
    this.pimentsSorted = this.piments

    this.panierItem = this.boutiqueService.getPanierFromLocalStorage()
  }

  searchResult(){
    if(this.search != "tout")
      this.pimentsSorted = this.piments.filter(x=>x.categorie == this.search)
    else
      this.pimentsSorted = this.piments
  }

  add(piment:Piment){
    this.boutiqueService.addToPanier(piment)
    this.panierItem = this.boutiqueService.getPanierFromLocalStorage()
  }

  delete(index:number){
    this.boutiqueService.deleteFromPanier(index)
  }

}
