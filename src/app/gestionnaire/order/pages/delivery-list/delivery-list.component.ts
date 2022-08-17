import { Component, OnInit } from '@angular/core';
import { LivraisonService } from 'src/app/shared/livraison.service';

@Component({
  selector: 'mtm-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {

  constructor(private livraisonServ:LivraisonService) { }
  allLiv:any[]=[]
  ngOnInit(): void {
    this.livraisonServ.allDelivery().subscribe(data=>{
      console.log(data)
      this.allLiv=data
    },err=>{
      console.log(err)
    })
  }

}
