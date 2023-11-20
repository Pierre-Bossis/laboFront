import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Piment } from 'src/app/_models/piment';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-liste-piments',
  templateUrl: './liste-piments.component.html',
  styleUrls: ['./liste-piments.component.css']
})
export class ListePimentsComponent {
  piments:Piment[] = []
  constructor(private pimentService:PimentsService, private route:Router) {
    this.piments = pimentService.listePiments
  }

  GoDetailsPiment(index:number){
    this.route.navigate(['detailsPiment', index]);
  }

  filterAsc(){
    this.piments.sort((a, b) => {
      const nomA = a.nom
      const nomB = b.nom
    
      if (nomA < nomB) {
        return -1;
      }
      if (nomA > nomB) {
        return 1;
      }
      return 0;
    });
  }
  filterDesc(){
    this.piments.sort((a, b) => {
      const nomA = a.nom
      const nomB = b.nom
    
      if (nomA < nomB) {
        return 1;
      }
      if (nomA > nomB) {
        return -1;
      }
      return 0;
    });
  }
}
