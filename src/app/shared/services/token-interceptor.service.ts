import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private inject:Injector) { }
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let tokenServ= this.inject.get(TokenService);
    let jwtToken=req.clone({
     setHeaders:{
       Authorization: 'Bearer ' + tokenServ.getToken()
     }
    });
    return next.handle(jwtToken)
  }

   

  
}
