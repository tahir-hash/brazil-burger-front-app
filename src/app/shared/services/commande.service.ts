import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Cart } from '../models/cart';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class CommandeService {

   idClient= Number(localStorage.getItem('userId'));
  private urlCmd = `${apiUrl}/commandes`;
  private urlCmdOwn = `${apiUrl}/clients/${this.idClient}/commandes`;
  private urlLIvreurs = `${apiUrl}/livreurs`;
  private urlzone = `${apiUrl}/zones`;


  constructor(private toast: NgToastService, private http: HttpClient, private token: TokenService) { }


  saveCart(obj: Cart) {
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.post<any>(this.urlCmd, JSON.stringify(obj), headersOptions)
  }

  getOwnCommande() {
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    console.log(headersOptions)
    return this.http.get<any>(this.urlCmdOwn, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }

  getAll() {
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.get<any>(this.urlCmd, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }

  tahir(test:string|null) {
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.get<any>(this.urlCmd+'?zone='+test, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }
  stateChange(etat:any, id:number){
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    const state={
      "etat":etat
    }
    return this.http.put<any>(`${this.urlCmd}/${id}`, state, headersOptions)
  }

  getAllLiv() {
    return this.http.get<any>(this.urlLIvreurs).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }
  getAllZone() {
   
    return this.http.get<any>(this.urlzone).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }

  getZoneCmd(id:number) {
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.get<any>(`${this.urlzone}/${id}/commandes`, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }
}
