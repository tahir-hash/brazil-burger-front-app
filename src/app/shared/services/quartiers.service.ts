import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Quartier } from '../models/quartier';
import { environment } from 'src/environments/environment';
const apiUrl=environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class QuartiersService {

  constructor(private http:HttpClient) { }
  private url:string=`${apiUrl}/quartiers`;

  getQuartier$= (): Observable<any> =>{
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        return data['hydra:member'];
      })
    )
  }
  
 
}
