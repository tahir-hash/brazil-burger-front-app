import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [
    ClientComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    RouterModule
  ],
  exports: [
    LayoutModule
  ]
})
export class ClientModule { }
