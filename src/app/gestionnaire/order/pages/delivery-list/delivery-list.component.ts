import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/shared/livraison.service';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  constructor(private commandeServ:CommandeService, private livraisonServ:LivraisonService) { }
  allLiv:any[]=[]
  enCours = "EN COURS"
  validee = "VALIDEE"
  annulee = "ANNULEE"
  terminee = "TERMINEE"
  selectedValue: any = ''
  selectedZone: any = ''
  zones: any[] = []
  ngOnInit(): void {
    this.livraisonServ.allDelivery().subscribe(data=>{
      console.log(data)
      this.allLiv=data
    },err=>{
      console.log(err)
    })

    this.commandeServ.getAllZone().subscribe(data=>{
      this.zones=data
    })
  }

  update(etat:any,id:any){
    this.livraisonServ.deliveryUpdate(etat,id).subscribe(err=>{
      console.log(err)
      location.reload()
    });
  }
}
