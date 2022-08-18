import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { TokenService } from './services/token.service';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {

  constructor(private http: HttpClient, private token: TokenService) { }
  private urlLiv= "https://tahirbrazilburger.herokuapp.com/api/livraisons"

  addDelivery(livraison:any){
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.post<any>(this.urlLiv, livraison, headersOptions)
  }

  allDelivery(){
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    return this.http.get<any>(this.urlLiv, headersOptions).pipe(
      map(data=>{
        return data['hydra:member']
      })
    )
  }

  oneDelivery(id:any){
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }

    return this.http.get<any>(`${this.urlLiv}/${id}`, headersOptions)
  }

  deliveryUpdate(etat:any, id:number){
    const headersOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token.getToken()}`
      })
    }
    const state={
      "etat":etat
    }
    return this.http.put<any>(`${this.urlLiv}/${id}`, state, headersOptions)
  }
}
