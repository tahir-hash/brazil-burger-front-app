import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { ToastrService } from 'ngx-toastr';
import { BoissonTaille } from 'src/app/shared/models/boisson-taille';
import { CartService } from 'src/app/shared/services/cart.service';
import { Boisson } from '../../../../shared/models/Boisson';
import { Produit } from '../../../../shared/models/produit';
import { SubMenu } from '../../../../shared/models/SubMenu';
import { Taille } from '../../../../shared/models/Taille';
import { ProduitService } from '../../../../shared/services/produit.service';

@Component({
  selector: 'mtm-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  produit: Produit | undefined = undefined;
  composition: SubMenu | null = null;
  frites: SubMenu | null = null;
  tailles: Taille | null = null;
  message: string = '';
  message1: string = '';
  qte = 1;
  tab: any[] = []
  tab1: any[] = []
  tabFries: any[] = []
  test: any={}
  quantiteMenu:number=0
  quantiteChoix:number=0
  commandeMenuBoissonTailles: BoissonTaille[] = []
  disabled_attr: boolean = true;
  constructor(private service: ProduitService, public route: ActivatedRoute, private cart: CartService, private toast: NgToastService) { }
  ngOnInit(): void {
   
    let id = this.route.snapshot.paramMap.get('id');
    
    this.service.one$(id).subscribe(data => {
      this.produit = data
      this.produit?.menu.menuTailles.forEach((element:any) => {
          this.quantiteMenu+=element.quantite
      });
      /* if(this.route.snapshot.paramMap.get('id')=='burger'){
        this.disabled_attr = false;
      } */
    })
  }
  activeTab: string = 'search';

  search(activeTab: string) {
    this.activeTab = activeTab;
  }

  result(activeTab: string) {
    this.activeTab = activeTab;
  }

  btnQte = 1
  recupQte(event: any) {
    this.btnQte = event;
  }
  quantity = 0

  nbr(event: any) {
    this.quantity = event
  }

  recupObj(event: any) {
    var nbr = this.quantity
    if (this.tab.length == 0) {
      let object = {
        idTaille: event.idTaille,
        quantite: event.quantite,
        boisson: [
          {
            id: event.jus.id,
            nbr: nbr,
            stock: event.jus.stock,
          }
        ]
      }
      this.tab.push(object);
    }
    else {
      var isFound = false;
      this.tab.map(data => {
        if (data.idTaille == event.idTaille) {
          isFound = true;
        }
      })
      if (isFound == false) {
        let object = {
          idTaille: event.idTaille,
          quantite: event.quantite,
          boisson: [
            {
              id: event.jus.id,
              nbr: nbr
            }
          ]
        }
        this.tab.push(object);
      }
      else {
        this.tab.map(data => {
          if (data.idTaille == event.idTaille) {
            data.quantite=event.quantite;
            let ObjB = {
              id: event.jus.id,
              nbr: nbr,
              stock: event.jus.stock,
            }
            let tabB: any[] = data.boisson
            let FoundB = false
            tabB.map((juice, i) => {
              if (juice.id == event.jus.id) {
                FoundB = true
                data.boisson[i] = ObjB
              }
            })
            if (FoundB == false) {
              tabB.push(ObjB)
            }
          }

        })

      }
    }
    this.quantiteChoix=0
    this.ShowError(this.tab)
  }
  ShowError(tab: any[]) {  
    tab.forEach((element:any) => {
      element.boisson.forEach((value:any) => {
        this.quantiteChoix+=value.nbr
      })
    });  
    tab.forEach(data => {
      console.log(data)
      let totalNbr = 0
      let tabB: any[] = data.boisson
      tabB.forEach((boisson) => {

        totalNbr += boisson.nbr
        //valid stock
        if (boisson.nbr > boisson.stock) {
          this.toast.error({ detail: "Error message", summary: "Stock indisponible", position: 'bl', duration: 1000 })
          this.disabled_attr = true
        }
        //valid quantity
        if (data.quantite < totalNbr) {
          this.toast.error({ detail: "Error message", summary: "Vous avez dépassé le nombre de boisson", position: 'bl', duration: 1000 })
          this.disabled_attr = true
        }
        if (data.quantite > totalNbr) {
           this.disabled_attr = true
        }
        //all ok
        if(boisson.nbr < boisson.stock && data.quantite == totalNbr && this.quantiteChoix==this.quantiteMenu*this.btnQte ){
            this.disabled_attr = false
        }
      })
    })
  }

  //other


  nbr1(event: any) {
    this.quantity = event
  }

  recupObj1(event: any) {
    var nbr = this.quantity
    if (this.tab1.length == 0) {
      let object = {
        idTaille:event.idTaille,
        libTaille:event.libTaille,
        prixTaille:event.prixTaille,
        boissonTaille:{
          id:event.boissonTaille.id,
          nom:event.boissonTaille.nom,
        },
        quantite:nbr
      }
      this.tab1.push(object);
    }
    else {
      var isFound = false;
      this.tab1.map(data => {
        if (data.boissonTaille.id == event.boissonTaille.id) {
          isFound = true;
        }
      })
      if (isFound == false) {
        let object = {
          idTaille: event.idTaille,
          libTaille:event.libTaille,
          prixTaille:event.prixTaille,
          boissonTaille:{
            id:event.boissonTaille.id,
            nom:event.boissonTaille.nom,
          },
          quantite: nbr
        }

        this.tab1.push(object);
      }
      else {
        this.tab1.map((data,index) => {
          if (data.boissonTaille.id == event.boissonTaille.id) {
            data.quantite = nbr
          }
        })
      }
    }
    //console.log(this.tab1)
    //----------------------------------VALIDATION-------------------------------------

    this.ShowError1(this.tab)
  }
  ShowError1(tab: any[]) {
    let totalNbr = 0
    tab.forEach(data => {
      let tabB: any[] = data.boisson
      tabB.forEach(boisson => {
        totalNbr += boisson.nbr
        if (boisson.nbr > boisson.stock) {
          this.message1 = 'diekhna'
        }
        else {
          this.message1 = ''
        }
      })
    })
  }

  recupObjCmd(event: any) {
    if (this.commandeMenuBoissonTailles.length == 0) {
    let cmd:BoissonTaille={
      quantite:event.jus.nbr,
      boissonTaille:{
        id:event.jus.id
      }
    }
      this.commandeMenuBoissonTailles.push(cmd);
    }
    else{
      var isFound = false;
      this.commandeMenuBoissonTailles.map(data => {
        if (data.boissonTaille.id == event.jus.id) {
          isFound = true;
        }
      })
      if (isFound == false) {
        let cmd:BoissonTaille={
          quantite:event.jus.nbr,
          boissonTaille:{
            id:event.jus.id
          }
        }
        this.commandeMenuBoissonTailles.push(cmd);
      }
      else {
        this.commandeMenuBoissonTailles.map((data:any,index) => {
          if (data.boissonTaille.id == event.jus.id) {
            let cmd:BoissonTaille={
              quantite:event.jus.nbr,
              boissonTaille:{
                id:event.jus.id
              }
            }
            this.commandeMenuBoissonTailles[index]=cmd
          }
        })

      }
    }
    //console.log(this.commandeMenuBoissonTailles)
  }

  friesObj(event: any,id:number,nom:string,prix:number){
    if(this.tabFries.length==0){
      let obj={
        quantite:event,
        nom:nom,
        prix:prix,
        portionFrite:{
          id:id
        }
      }
      this.tabFries.push(obj);
    }
    else{
      let isFound = false;
      this.tabFries.map(data => {
        if (data.portionFrite.id == id) {
          isFound = true;
        }
      })
      if(isFound == false){
        let obj={
          quantite:event,
          nom:nom,
          prix:prix,
          portionFrite:{
            id:id
          }
        }
        this.tabFries.push(obj);  
      }
      else{
        this.tabFries.map(data=>{
          //console.log(data);
          if(data.portionFrite.id==id){
            data.quantite=event;
          }
        })
      }
    }
   // console.log(this.tabFries)
  }

  // myTimeout = setInterval(this.recupObj(this.test), 1000);

}
