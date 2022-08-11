import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MinusCountComponent } from 'src/app/layout/minus-count/minus-count.component';
import { Boisson } from '../../../../shared/models/Boisson';

@Component({
  selector: 'mtm-boissons',
  templateUrl: './boissons.component.html',
  styleUrls: ['./boissons.component.css']
})
export class BoissonsComponent implements OnInit {
  @Input() boisson:Boisson | undefined = undefined;
  @Input() otherBoisson:Boisson | undefined = undefined;
  @Input() juice: any |undefined = undefined;
  @Output() juiceChanged: EventEmitter<any> = new EventEmitter();
 attr_dis=true
  qte=0
  constructor() { }

  ngOnInit(): void {
  }
  
  /* onCount(event:any)
  {
    console.log(event);
  } */
  quantity=0
  valid(event:any)
  {
    this.quantity=event
    this.juiceChanged.emit(this.quantity);
  }

  validDis(event:any){
    alert('ok')
  }
 
}
