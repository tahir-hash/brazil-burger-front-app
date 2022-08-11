import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { OwnCmd } from 'src/app/shared/models/OwnCmd';
import { CommandeService } from 'src/app/shared/services/commande.service';

@Component({
  selector: 'mtm-mes-commandes',
  templateUrl: './mes-commandes.component.html',
  styleUrls: ['./mes-commandes.component.css']
})
export class MesCommandesComponent implements OnInit {

  enCours = "EN COURS"
  validee = "VALIDEE"
  annulee = "ANNULEE"
  own:any[]=[]
  page:number=1
  total:any
  constructor(private commandeServ:CommandeService) { }
  selectedValue:string=''  
  ngOnInit(): void {
    this.commandeServ.getOwnCommande().subscribe(
      data=> {
        this.own = data
        console.log(this.own)
      }
    )
    this.total=this.own.length
  }
}
