import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private commandeServe:CommandeService) { }
  orderEnd:any[]=[]
  liv:any[]=[]

  ngOnInit(): void {
    this.commandeServe.getAll().subscribe(data=>{
      this.orderEnd==data.filter((order:any)=>{
        return order.etat=='TERMINEE'
      })
    })
    this.commandeServe.getAllLiv().subscribe(data=>{
      this.liv=data
    })
  }

}
