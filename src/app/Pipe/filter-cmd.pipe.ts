import { Pipe, PipeTransform } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';

@Pipe({
  name: 'filterCmd'
})
export class FilterCmdPipe implements PipeTransform {

  constructor(private commandeServ: CommandeService){}
  
  transform(commandes: any[], filterTxt: string): any {
    if (filterTxt == '') {
      return commandes
    }
    else {
      return commandes.filter((commande) => {
        return commande.etat === filterTxt
      })
    }

  }

}
