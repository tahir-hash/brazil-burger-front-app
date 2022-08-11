import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private url:string = "https://tahirbrazilburger.herokuapp.com/api/menu_complements/1"
  constructor(private http: HttpClient) { }

  all$= () =>{
    return this.http.get<any>(this.url).pipe(
      map(data=>{
        let menu: any={
          burgers: data.burgers,
          tailles: data.tailles,
          frites:data.frites
        }
        return menu;
      })
    )
  }

}
