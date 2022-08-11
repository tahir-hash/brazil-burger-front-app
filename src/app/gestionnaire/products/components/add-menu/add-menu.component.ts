import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormGroup } from '@angular/forms';

@Component({
  selector: 'mtm-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  @Input() burgers:any;
  @Input() tailles:any;
  @Input() frites:any;
  @Input() form:any
  @Input() i:number=0;
  @Output() indexChanged:EventEmitter<number> = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
   // this.form = <FormGroup>this.controlContainer.control;
  }

  delete(i:number){
    this.indexChanged.emit(i);
  }
}
