import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zoneFilter'
})
export class ZoneFilterPipe implements PipeTransform {

  transform(commandes: any[], filterTxt: string): any {
    if (filterTxt == '') {
      return commandes
    }
    else {
      return commandes.filter((commande) => {
        return commande.zone.libelle === filterTxt
      })
    }

  }

}
