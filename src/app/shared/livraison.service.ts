import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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
}
