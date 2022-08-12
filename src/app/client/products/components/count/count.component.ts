import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'mtm-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.css'],
})
export class CountComponent implements OnInit {
  constructor() { }
  nombre = 1
  @Output() count = new EventEmitter<number>();
  @Output() disabled : EventEmitter<boolean> = new EventEmitter();

  disabled_attr=false;
  
  ngOnInit(): void {
  }
  qtyminus(input: any) {
    if (input != null) {
      var current = Number(input.value);
      var newval = (current - 1);
      if (newval < 1) {
        newval = 1;
      }
      input.value = Number(newval);
      this.count.emit(input.value);
    }
  }

  qtyplus(input: any) {
    if (input != null) {
      var current = Number(input.value);
      var newval = (current + 1);
      input.value = Number(newval);
      this.count.emit(input.value);
    }
  }

  validCount() {
    if (this.nombre == 0) {
      return 'La quantité doit etre superieur a zero';
    }
    else {
      return ''
    }
  }

  onKey(input: any){
    this.count.emit(input.value)
  }

  
}
