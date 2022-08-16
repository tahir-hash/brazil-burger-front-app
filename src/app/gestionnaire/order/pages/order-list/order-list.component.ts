import { Component, OnInit } from '@angular/core';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor(private commandeServ: CommandeService) { }
  selectDate: any = ''
  selectedValue: any = ''
  enCours = "EN COURS"
  validee = "VALIDEE"
  annulee = "ANNULEE"
  allCmd: any[] = []
  page: number = 1
  total: any
  ngOnInit(): void {
    this.commandeServ.getAll().subscribe(
      data => {
       /*  this.allCmd = data.filter((cmd:any)=>{
          var date= new Date(cmd.dateCmd)
          var dat1= date.getFullYear()+'-'+date.getMonth()+'-'+ date.getDate();
          var now=new Date()
          var nowF=now.getFullYear()+'-'+now.getMonth()+'-'+ now.getDate();
          return dat1==nowF && cmd.etat== 'EN COURS'
        }) */
        this.allCmd=data
       console.log(this.allCmd)
      }
    )
    if (this.allCmd) {
      this.total = this.allCmd.length
    }
  }

}
