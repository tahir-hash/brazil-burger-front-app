import { Component, OnInit } from '@angular/core';
import { Catalogue } from 'src/app/shared/models/catalogue';
import { Produit } from 'src/app/shared/models/produit';
import { ProduitService } from 'src/app/shared/services/produit.service';

@Component({
  selector: 'mtm-liste-menu',
  templateUrl: './liste-menu.component.html',
  styleUrls: ['./liste-menu.component.css']
})
export class ListeMenuComponent implements OnInit {

  products: Produit[] | undefined = undefined;
  page:number=1
  total:any
  annulee = "ANNULEE"
  constructor(private produit:ProduitService) { }

  ngOnInit(): void {
    this.produit.all$().subscribe(data=>{
      this.products=data.menus;
   })
   if(this.products){
     this.total=this.products.length
   }
  }

  archived(id:number|undefined){
    if(id){
      this.produit.productsArchived(id).subscribe(data=>{
        console.log(data)
        location.reload()
      })
    }
  }
}
