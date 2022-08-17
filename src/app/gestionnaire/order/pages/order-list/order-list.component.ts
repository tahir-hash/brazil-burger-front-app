import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private commandeServ: CommandeService,private toast:NgToastService) { }
  enCours = "EN COURS"
  validee = "VALIDEE"
  annulee = "ANNULEE"
  terminee = "TERMINEE"
  selectDate: any = ''
  selectedValue: any = this.enCours
  selectedZone: any = ''
  allCmd: any[] = []
  zones: any[] = []
  page: number = 1
  total: any
  ngOnInit(): void {
    this.commandeServ.getAll().subscribe(
      data => {
        this.allCmd=data
       console.log(this.allCmd)
      }
    )
    if (this.allCmd) {
      this.total = this.allCmd.length
    }
    this.commandeServ.getAllZone().subscribe(data=>{
      this.zones=data
    })
  }

  changeState(etat:any,id:number){

    this.commandeServ.stateChange(etat,id).subscribe(err=>{
      console.log(err)
      location.reload()
    });
    this.toast.info({ detail: "Update", summary: "Modification reussie", position:'tl', duration: 5000 })
    //location.reload()
  }

}
