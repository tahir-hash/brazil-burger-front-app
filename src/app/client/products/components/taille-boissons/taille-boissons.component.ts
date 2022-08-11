import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Boisson } from '../../../../shared/models/Boisson';
import { MenuTaille } from '../../../../shared/models/MenuTaille';
import { Taille } from '../../../../shared/models/Taille';

@Component({
  selector: 'mtm-taille-boissons',
  templateUrl: './taille-boissons.component.html',
  styleUrls: ['./taille-boissons.component.css']
})
export class TailleBoissonsComponent implements OnInit {
  @Input() tailles: MenuTaille | undefined = undefined;
  @Input() otherTaille: Taille | undefined = undefined;
  @Input() btnQte: number = 1;
  @Input() message1: string = '';

  @Output() objetBoissonChange: EventEmitter<any> = new EventEmitter();
  @Output() nbrChange: EventEmitter<any> = new EventEmitter();
  qte = 0
  constructor() { }

  quantity = 0
  ngOnInit(): void {
   // console.log(this?.tailles.length)
    
  }
  testValid: boolean = false;
  validQte(event: any) {
    this.quantity = event
  this.nbrChange.emit(this.quantity);
  }
  valid(idBoisson: any,stock:any, idTaille: any, quantite: number) {
    let object = {
      idTaille: idTaille,
      quantite: quantite,
      jus: {
        idBoisson: idBoisson,
        nbr: this.quantity,
        stock: stock
      }
    }
    //alert(object.idTaille)
    this.objetBoissonChange.emit(object)

  }
  
  //other
  validQte1(event: any) {
    this.quantity = event
  this.nbrChange.emit(this.quantity);
  }
  valid1(idBoisson: any,stock:any, idTaille: any) {
    let object = {
      idTaille: idTaille,
      jus: {
        idBoisson: idBoisson,
        nbr: this.quantity,
        stock: stock
      }
    }
    //alert(object.idTaille)
    this.objetBoissonChange.emit(object)

  }
}
