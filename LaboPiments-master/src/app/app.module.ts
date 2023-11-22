import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ListePimentsComponent } from './components/liste-piments/liste-piments.component';
import { DetailsPimentComponent } from './components/liste-piments/details-piment/details-piment.component';
import { AddPimentListeComponent } from './components/admin/add-piment-liste/add-piment-liste.component';
import { BoutiqueComponent } from './components/boutique/boutique.component';
import { ArticleDetailsComponent } from './components/boutique/article-details/article-details.component';
import { AddPimentBoutiqueComponent } from './components/admin/add-piment-boutique/add-piment-boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ListePimentsComponent,
    DetailsPimentComponent,
    AddPimentListeComponent,
    BoutiqueComponent,
    ArticleDetailsComponent,
    AddPimentBoutiqueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
