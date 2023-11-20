import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ListePimentsComponent } from './components/liste-piments/liste-piments.component';
import { DetailsPimentComponent } from './components/liste-piments/details-piment/details-piment.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"listePiments",component:ListePimentsComponent},
  {path:"detailsPiment/:id",component:DetailsPimentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
