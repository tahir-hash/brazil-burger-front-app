import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListeMenuComponent } from './pages/liste-menu/liste-menu.component';
import { AjouterMenuComponent } from './pages/ajouter-menu/ajouter-menu.component';
import { LayoutModule } from '../layout/layout.module';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    ListeMenuComponent,
    AjouterMenuComponent,
    AddMenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    LayoutModule
  ]
})
export class ProductsModule { }
