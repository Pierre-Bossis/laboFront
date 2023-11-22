import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Sauce } from 'src/app/_models/sauce';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-add-piment-boutique',
  templateUrl: './add-piment-boutique.component.html',
  styleUrls: ['./add-piment-boutique.component.css']
})
export class AddPimentBoutiqueComponent {
  sauce:Sauce  = {id:0, nom: '' ,categorie:''};

  constructor(private pimentService:PimentsService,private route:Router){
    this.sauce.categorie = "light"
  }

  addSauceForm(){    
     this.pimentService.addToListeSauces(this.sauce)
     this.route.navigate(['home']);
  }
}
