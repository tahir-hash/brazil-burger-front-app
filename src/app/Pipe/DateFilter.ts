import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFilter'
})
export class DateFilter implements PipeTransform {

  transform(commandes: any[], filterdate: any): any {
    if (filterdate == '') {
      return commandes
    }
    else {
      return commandes.filter((commande) => {
        return commande.dateCmd === new Date(filterdate)
      })
    }

  }

}
