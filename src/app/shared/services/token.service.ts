import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Token } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(private router:Router) { }
  connect:boolean=false

  getToken():any{
    return localStorage.getItem('token');
  }

  saveToken(token:any){
    localStorage.setItem('token', token)
  }

  isConnect():boolean{
    const token :any = this.getToken()
    if (token != null) {
      return this.connect = true
    }
    return this.connect
  }

  logOut(){
    localStorage.clear()
    this.router.navigate(['/client/products/catalogue']);
  }

  
}
