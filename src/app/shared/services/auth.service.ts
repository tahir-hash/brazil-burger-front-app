import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { Login, Token } from '../models/Auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin='https://tahirbrazilburger.herokuapp.com/api/login_check'
  private urlRegister='https://tahirbrazilburger.herokuapp.com/api/register'

  constructor(private http:HttpClient) { }

  
  login(form:Login){
    return this.http.post<Token>(this.urlLogin, form)
  }

  signIn(form:Login){
    return this.http.post<any>(this.urlRegister,form)
  }

  
}
