import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListePimentsComponent } from './components/liste-piments/liste-piments.component';
import { DetailsPimentComponent } from './components/liste-piments/details-piment/details-piment.component';
import { AddPimentListeComponent } from './components/admin/add-piment-liste/add-piment-liste.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { ArticleDetailsComponent } from './components/boutique/article-details/article-details.component';
import { AddPimentBoutiqueComponent } from './components/admin/add-piment-boutique/add-piment-boutique.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"listePiments",component:ListePimentsComponent},
  {path:"detailsPiment/:id",component:DetailsPimentComponent},
  {path:"admin/add-piment-liste",component:AddPimentListeComponent},
  {path:"admin/add-piment-boutique",component:AddPimentBoutiqueComponent},
  {path:"boutique",component:BoutiqueComponent},
  {path:"boutique/article/:id",component:ArticleDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
