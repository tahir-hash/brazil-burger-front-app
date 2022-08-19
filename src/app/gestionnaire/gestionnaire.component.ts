import { Component, OnInit } from '@angular/core';
import { CommandeService } from '../shared/services/commande.service';

@Component({
  selector: 'mtm-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {
  date: any = new Date();
  prixD: number = 0
  prixM: number = 0
  allDayC: any[] = []
  allDayV: any[] = []
  allMonth: any[] = []
  enCours = "EN COURS"
  validee = "VALIDEE"
  constructor(private commandeServ: CommandeService) { }

  ngOnInit(): void {
    this.commandeServ.getAll().subscribe(
      data => {
        this.allDayV = data.filter((day: any) => {
          return day.etat == this.validee && day.dateCmd==this.date
        })
        this.allDayC = data.filter((day: any) => {
          return day.etat == this.enCours && day.dateCmd==this.date
        })
        this.allMonth = data.filter((day: any) => {
          return day.etat == this.validee && new Date(day.dateCmd).getMonth()==this.date.getMonth()
        })
        if (this.allDayV) {
          this.allDayV.map((day: any) => {
            console.log(day.montant)
            this.prixD += day.montant
          })
        }

        if (this.allMonth) {
          this.allMonth.map((day: any) => {
            console.log(day.montant)
            this.prixM += day.montant
          })
        }
      }
    )

  }

}
