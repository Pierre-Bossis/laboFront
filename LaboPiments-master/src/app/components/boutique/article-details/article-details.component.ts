import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Piment } from 'src/app/_models/piment';
import { PimentsService } from 'src/app/_services/piments.service';

@Component({
  selector: 'app-article-details',
  templateUrl: './article-details.component.html',
  styleUrls: ['./article-details.component.css']
})
export class ArticleDetailsComponent implements OnInit{
constructor(private pimentService:PimentsService ,private route:ActivatedRoute,private route2:Router){}
parsedId:any
piment!:Piment

ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');
    if(id != null){
      this.parsedId = id
      if(this.pimentService.listePiments[this.parsedId] != null)
        this.piment = this.pimentService.listePiments[this.parsedId]
    }
  });
}

boutique(){
  this.route2.navigate(["boutique"])
}


}
