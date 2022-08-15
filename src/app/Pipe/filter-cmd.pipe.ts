import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCmd'
})
export class FilterCmdPipe implements PipeTransform {

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
