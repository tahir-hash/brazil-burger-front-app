import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filterCmd'
})
export class FilterCmdPipe implements PipeTransform {

  transform(commandes: any[], filterTxt:string): any {
    if(filterTxt==''){
      return commandes;
    }
    commandes.filter((commande)=>{
      return commande.etat=='filterTxt'
    })
     
  }

}
