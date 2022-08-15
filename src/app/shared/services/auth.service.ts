import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Login, Token } from '../models/Auth';
import { User } from '../models/User';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin='https://tahirbrazilburger.herokuapp.com/api/login_check'
  private urlRegister='https://tahirbrazilburger.herokuapp.com/api/register'

  

  constructor(private http:HttpClient,private tokenServ:TokenService) {

   }

  

  login(form:Login){
    return this.http.post<any>(this.urlLogin, form)
  }

  signIn(form:Login){
    return this.http.post<any>(this.urlRegister,form)
  }

  
  
}
