import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Piment } from '../_models/piment';
import { Sauce } from '../_models/sauce';

@Injectable({
  providedIn: 'root'
})
export class PimentsService {
  private readonly _pimentsEndPoint: string = 'http://localhost:3000/piments';
  private readonly _saucesEndPoint: string = 'http://localhost:3000/sauces';

  listePiments:Piment[] = []
  piment!:Piment
  listeSauces:Sauce[] = []
  constructor(private httpClient:HttpClient)
  {
    this.getPiments().subscribe((data)=>this.listePiments = data)
    this.getSauces().subscribe((data) => this.listeSauces = data)
  }

  addToListeSauces(sauce:Sauce){
    sauce.id = this.listeSauces.length+1
    this.listeSauces.push(sauce)
    this.pushToLocalStorage()
  }

  //push la liste su le localstorage
  private pushToLocalStorage(){
    const piments = JSON.stringify(this.listePiments)
    localStorage.setItem("listePiments",piments)
    const sauces = JSON.stringify(this.listeSauces)
    localStorage.setItem("listeSauces",sauces)
  }

  getPiments(): Observable<Piment[]>{
    return this.httpClient.get<Piment[]>(this._pimentsEndPoint)
  }
  getPimentOne(id:number): Observable<Piment>{
    return this.httpClient.get<Piment>(this._pimentsEndPoint + '/' + id)
  }

  addPiment(piment:Piment): Observable<void>{
    piment.id = this.listePiments.length+1
    this.listePiments.push(piment)
    
    return this.httpClient.post<void>(this._pimentsEndPoint, piment)
  }

  deletePiment(id:number): Observable<void>{
    return this.httpClient.delete<void>(this._pimentsEndPoint + '/' + id)
  }

  getSauces():Observable<Sauce[]>{
    return this.httpClient.get<Sauce[]>(this._saucesEndPoint)
  }

  addSauce(sauce:Sauce):Observable<void>{
    sauce.id = this.listeSauces.length+1
    this.listeSauces.push(sauce)
    
    return this.httpClient.post<void>(this._saucesEndPoint,sauce)
  }
}
