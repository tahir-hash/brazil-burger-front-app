import { Injectable } from '@angular/core';
import { Token } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  connect:boolean=false

  getToken(){
    return localStorage.getItem('token');
  }

  saveToken(token:string){
    localStorage.setItem('token', token)
  }

  isConnect():boolean{
    const token :any = this.getToken()
    if (token != null) {
      this.connect = true
    }
    return this.connect
  }

  logOut(){
    localStorage.clear()
    window.location.reload()
  }
}
