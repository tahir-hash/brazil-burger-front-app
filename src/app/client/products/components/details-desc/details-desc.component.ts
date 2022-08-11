import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { BoissonTaille } from 'src/app/shared/models/boisson-taille';
import { BurgerCommande } from 'src/app/shared/models/burger-commande';
import { MenuCommande } from 'src/app/shared/models/menu-commande';
import { CartService } from 'src/app/shared/services/cart.service';
import { Produit } from '../../../../shared/models/produit';

@Component({
  selector: 'mtm-details-desc',
  templateUrl: './details-desc.component.html',
  styleUrls: ['./details-desc.component.css']
})
export class DetailsDescComponent implements OnInit {
@Input() details:Produit| undefined = undefined;
@Input() commandeMenuBoissonTailles:BoissonTaille[] = [];

 btnQte=1;
@Output() btnQteChange = new EventEmitter<number>();
constructor(private cart:CartService,private toast: NgToastService) { }
  attr_dis=false;
  cmdMenuBoissonTailles: BoissonTaille[]= []
  ngOnInit(): void {
  }
  tailleCtr(event:number)
  {
    this.btnQte=event;
    this.btnQteChange.emit(this.btnQte);
  }

  Ondisabled(event:any){
   this.attr_dis=event;
  }

  ok(){
    alert("ok");
  }

  addToCart(det:Produit|undefined){    
    if(det?.type=='burger'){
      
      let obj={
        quantite:this.btnQte,
        burger: det
      }
      this.cart.addBurger(obj)
      this.toast.success({detail:"Ajout reussi", summary:"Vous avez ajouté le produit avec succès",position:"bl", duration:5000})
    }
    if(det?.type=='menu'){
      
      let obj:MenuCommande={
        quantite:this.btnQte,
        menu: {
          id:Number(det.id),
          nom:det.nom,
          image:det.image,
          type:det.type,
          prix:det.prix,
          commandeMenuBoissonTailles:this.commandeMenuBoissonTailles
        }
      }
      this.cart.addMenu(obj)
      this.toast.success({detail:"Ajout reussi", summary:"Vous avez ajouté le produit avec succès",position:"bl", duration:5000})
    }
    console.log(this.cart.Panier.value)
  }

  
}
