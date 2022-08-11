import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'mtm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
count:any=0
connect:boolean=this.token.isConnect()
  constructor(private cart:CartService,private token:TokenService) { }

  ngOnInit(): void {
    this.cart.Panier.subscribe(info=>{
      if(info.burgerCommandes && info.menuCommandes && info.boissonTailleCommandes && info.portionFriteCommandes){

        this.count=info.burgerCommandes?.length + info.menuCommandes?.length + info.portionFriteCommandes?.length + info.boissonTailleCommandes?.length
      }
      
    })
  }
  logout(){
    this.token.logOut();
  }
}
