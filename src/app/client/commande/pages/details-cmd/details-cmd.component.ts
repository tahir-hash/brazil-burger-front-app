import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mtm-details-cmd',
  templateUrl: '../panier/panier.component.html',
  styleUrls: ['../panier/panier.component.css']
})
export class DetailsCmdComponent implements OnInit {
  @Input('panier') panier : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

}
