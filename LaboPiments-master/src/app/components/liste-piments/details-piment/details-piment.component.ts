import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
constructor(private pimentService:PimentsService,private route:ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if(id != null){
        let parsedId = +id
        if(this.pimentService.listePiments[parsedId] != null)
          this.piment = this.pimentService.listePiments[parsedId]
      }
    });
    if(localStorage.getItem("role") != null)
    this.connectAs = localStorage.getItem("role")
  }
}
