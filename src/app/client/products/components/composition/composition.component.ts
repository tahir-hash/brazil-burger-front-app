import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../../../shared/models/produit';
import { SubMenu } from '../../../../shared/models/SubMenu';

@Component({
  selector: 'mtm-composition',
  templateUrl: './composition.component.html',
  styleUrls: ['./composition.component.css']
})
export class CompositionComponent implements OnInit {
  @Input() composition:SubMenu | undefined = undefined;
  @Input() frites:SubMenu | undefined = undefined;
  @Input() otherFrite:Produit | undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
