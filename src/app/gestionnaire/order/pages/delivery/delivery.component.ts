import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { LivraisonService } from 'src/app/shared/livraison.service';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  constructor(private commandeServe:CommandeService,private fb:FormBuilder,
    private livraisonServ:LivraisonService,private toast: NgToastService) { }
  orderEnd:any[]=[]
  liv:any[]=[]
  myform:any;
  tes:any[]=[]
  zone:any[]=[]
  teams:any[]=[]
  ngOnInit(): void {
    this.commandeServe.getZoneCmd(36).subscribe(data=>{
     this.orderEnd= data.filter((item:any) => {
      return item.etat === "TERMINEE"
    })
    })
    this.commandeServe.getAll().subscribe(data=>{
      this.tes=data.filter((item:any) => {
        return item.etat === "TERMINEE"
      });
      this.tes.forEach(element=>{
        this.zone.push(element.zone.id)
      })
       
      const zoneA= [...new Set(this.zone)]
      zoneA.forEach(element=>{
        this.commandeServe.getZoneCmd(element).subscribe(data=>{
          this.teams.push(data.filter((item:any) => {
            return item.etat === "TERMINEE"
          }))
         })
      });
      console.log(this.teams)
    })
    //livreur disponible
    this.commandeServe.getAllLiv().subscribe(data=>{
      this.liv= data.filter((item:any) => {
        return item.etat === "DISPONIBLE"
      })
    })

    this.myform=this.fb.group({
      commandes:this.fb.array([]),
      livreur:[null, Validators.required],
      montantTotal:[0]
    })
  }
  get commandes() { return this.myform.controls['commandes'] as FormArray }
  get livreur() { return this.myform.get('livreur') }

  onChange(item:any, event:any,index:any){
    const check = <FormArray>this.myform.controls.commandes;
     let ischeck= event.target.checked;
     if(ischeck){
      check.push(new FormControl(item))
     }else{
      /* let index = check.controls.findIndex(x => x.value == item) */
      check.removeAt(index);
     }
  }
  
  //submit 
  submitData(){
    let tab:any[]=[]
    this.myform.value.commandes.map((data:any)=>{
        let commandes:any= {
          id:data.id
        }
        tab.push(commandes)
    })
    this.myform.value.commandes=tab
    this.myform.value.livreur={
      id:this.myform.value.livreur
    }
    
    this.livraisonServ.addDelivery(this.myform.value).subscribe(data=>{
      console.log(data)
      this.toast.success({ detail: "Livraison Validée", summary: "Veuillez faire vos achats", position: "bl", duration: 5000 })
    },err=>{
      console.log(err)
    })
  }
}
