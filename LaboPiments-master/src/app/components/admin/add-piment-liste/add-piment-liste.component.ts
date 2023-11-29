import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Piment } from 'src/app/_models/piment';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-add-piment-liste',
  templateUrl: './add-piment-liste.component.html',
  styleUrls: ['./add-piment-liste.component.css']
})
export class AddPimentListeComponent {
  piment:Piment  = {id:0, nom: '' ,description:'',categorie:'',scoville:''};

  constructor(private pimentService:PimentsService,private route:Router){
    this.piment.categorie = "light"
  }

  addPimentForm(){    
    this.pimentService.addPiment(this.piment).subscribe(() => this.route.navigate(['listePiments']))
  }

}
