import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionnaireRoutingModule } from './gestionnaire-routing.module';
import { GestionnaireComponent } from './gestionnaire.component';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    GestionnaireComponent
  ],
  imports: [
    CommonModule,
    GestionnaireRoutingModule,
    LayoutModule
  ]
})
export class GestionnaireModule { }
