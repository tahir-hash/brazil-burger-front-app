import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { catchError, map, Observable, tap, throwError } from 'rxjs';
import { Cart } from '../models/cart';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

   idClient= Number(localStorage.getItem('userId'));
  private urlCmd = "https://tahirbrazilburger.herokuapp.com/api/commandes";
  private urlCmdOwn = `https://tahirbrazilburger.herokuapp.com/api/clients/${this.idClient}/commandes`;
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
    console.log(headersOptions)
    return this.http.get<any>(this.urlCmd, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }
}
