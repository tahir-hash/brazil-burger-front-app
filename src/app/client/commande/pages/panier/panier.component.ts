import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { Cart } from 'src/app/shared/models/cart';
import { Quartier } from 'src/app/shared/models/quartier';
import { Zone } from 'src/app/shared/models/zone';
import { CartService } from 'src/app/shared/services/cart.service';
import { CommandeService } from 'src/app/shared/services/commande.service';
import { QuartiersService } from 'src/app/shared/services/quartiers.service';
import { TokenService } from 'src/app/shared/services/token.service';

@Component({
  selector: 'mtm-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  @Input('panier') panier : boolean = true;
  items:Cart={
    all:[]
  };
  prix: number=0
  qrt:Quartier[]=[]
  commande:any;
  constructor(private cart:CartService,
    private quartier:QuartiersService,
    private commandeServ: CommandeService,
    private toast: NgToastService,
    private token:TokenService,
    private router: Router,
    private fb: FormBuilder) { }
  
  ngOnInit(): void {
    this.cart.Panier.subscribe(data=>{
      if(data.burgerCommandes && data.menuCommandes && data.boissonTailleCommandes && data.portionFriteCommandes){
        data.all=[...data.burgerCommandes,...data.menuCommandes,...data.boissonTailleCommandes,...data.portionFriteCommandes]; 
      }
      this.items=data
      this.prix=this.cart.getMontant()
    })
    
    this.quartier.getQuartier$().subscribe(quart=>{
      this.qrt=quart
    })

    this.commande = this.fb.group({
      zone: [null, Validators.required],
      telClient: [null,[Validators.required,Validators.minLength(9),Validators.maxLength(9)]],
    })
  }

  get zone() { return this.commande.get('zone') }
  get telClient() { return this.commande.get('telClient') }


  removeToCart(obj:any) {
    this.cart.remove(obj);
    this.toast.info({detail:"Suppression du Panier", summary:"Produit supprimer  avec succès!!!", position:'br',duration:5000})
  }

  //nav tabs
  activeTab: string = 'search';

  search(activeTab: string) {
    this.activeTab = activeTab;
  }

  result(activeTab: string) {
    this.activeTab = activeTab;
  }
ok=this.cart.Panier.value

  validCmd(){
    if(this.token.isConnect()){
      
      if(this.activeTab=='search'){
        let zone: Zone= {
          id:this.commande.value.zone
        }
        this.cart.Panier.value.zone=zone
        this.cart.Panier.value.telClient=this.commande.value.telClient
      }
      if(this.activeTab=='result'){
        delete(this.cart.Panier.value.zone)
        delete(this.cart.Panier.value.telClient)
      }
      console.log(this.cart.Panier.value);
    //  console.log(this.cart.Panier.value)
      
      this.commandeServ.saveCart(this.cart.Panier.value).subscribe(
        err=>console.log(err)
      )
      this.cart.emptyCart(this.cart.Panier);
      this.router.navigate(['/client/products/catalogue']);
      this.toast.success({detail:"Commande Validée", summary:"Votre commande a été validéé avec succès!!!", position:'bl',duration:5000}) 
      window.location.reload();
    }
     else{
      this.router.navigate(['/securite/login']);
      this.toast.error({detail:"Unauthorized", summary:"Veuillez vous connecter d'abord!!!",position:'tl', duration:5000})

    }
    //console.log(this.cart.Panier.value)
  }
  
}
