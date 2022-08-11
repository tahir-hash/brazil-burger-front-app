import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Quartier } from '../models/quartier';

@Injectable({
  providedIn: 'root'
})
export class QuartiersService {

  constructor(private http:HttpClient) { }
  private url:string='https://tahirbrazilburger.herokuapp.com/api/quartiers';

  getQuartier$= (): Observable<any> =>{
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        return data['hydra:member'];
      })
    )
  }
  
 
}
