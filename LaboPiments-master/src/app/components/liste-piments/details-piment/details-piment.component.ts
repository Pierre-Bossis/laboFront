import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piment } from 'src/app/_models/piment';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-details-piment',
  templateUrl: './details-piment.component.html',
  styleUrls: ['./details-piment.component.css']
})
export class DetailsPimentComponent implements OnInit {
  piment!:Piment
  connectAs:string | null= ""
  parsedId:any
constructor(private pimentService:PimentsService,private route:ActivatedRoute, private route2:Router) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id != null){
        this.parsedId = id
        if(this.pimentService.listePiments[this.parsedId] != null)
          this.piment = this.pimentService.listePiments[this.parsedId]
      }
    });
    if(localStorage.getItem("role") != null)
    this.connectAs = localStorage.getItem("role")
  }

  goToBoutique(){    
    this.route2.navigate(["boutique/article",this.parsedId])
  }
}
