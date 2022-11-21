import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';
import { Login, Token } from '../models/Auth';
import { User } from '../models/User';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private urlLogin=`${apiUrl}/login_check`;
  private urlRegister=`${apiUrl}/register`;

  

  constructor(private http:HttpClient,private tokenServ:TokenService) {

   }

  

  login(form:Login){
    return this.http.post<any>(this.urlLogin, form)
  }

  signIn(form:Login){
    return this.http.post<any>(this.urlRegister,form)
  }

  
  
}
