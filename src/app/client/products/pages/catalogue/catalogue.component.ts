import { Component, Input, OnInit } from '@angular/core';
import { filter, map, mergeAll, Observable, tap } from 'rxjs';
import { Catalogue } from '../../../../shared/models/catalogue';
import {Produit } from '../../../../shared/models/produit';
import { ProduitService } from '../../../../shared/services/produit.service';

@Component({
  selector: 'mtm-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
//
  catalogue: Produit[] | undefined = undefined;
  constructor(private service:ProduitService) { }

  ngOnInit(): void {
    this.service.all$().subscribe(data=>{
       this.catalogue=data.getAll;
    })
     
  }

  onfilterProduct(type:string)
  {
    /* this.produits$ = this.service.all$().pipe(
      map(result=>{
        console.log(result)
       return result.filter(prod=>prod.type==type)
      })
    ) */
    this.service.all$().subscribe(data=>{
      if(type!="")
      {
        this.catalogue=data.getAll?.filter(prod=>prod.type==type);
      }
      else
      {this.catalogue=data.getAll;}
      

   })
  }



  
}
