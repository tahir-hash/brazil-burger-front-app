import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDate'
})
export class FilterDatePipe implements PipeTransform {

  transform(commandes: any[], filterdate: any): any {
    if (filterdate == '') {
      return commandes
    }
    else {
      return commandes.filter((commande) => {
        const cmdDate= new Date(commande.dateCmd);

        return cmdDate.toLocaleDateString() === new Date(filterdate).toLocaleDateString()
      })
    }

  }
}
