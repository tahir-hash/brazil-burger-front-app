import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mtm-gestionnaire',
  templateUrl: './gestionnaire.component.html',
  styleUrls: ['./gestionnaire.component.css']
})
export class GestionnaireComponent implements OnInit {
  date:any= new Date;
  constructor() { }

  ngOnInit(): void {
  }

}
