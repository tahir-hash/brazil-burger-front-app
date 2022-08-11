import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { CardComponent } from './components/card/card.component';
import { DetailsComponent } from './pages/details/details.component';
import { CountComponent } from './components/count/count.component';
import { CompositionComponent } from './components/composition/composition.component';
import { RouterModule } from '@angular/router';
import { BoissonsComponent } from './components/boissons/boissons.component';
import { TailleBoissonsComponent } from './components/taille-boissons/taille-boissons.component';
import { DetailsDescComponent } from './components/details-desc/details-desc.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductsComponent,
    CatalogueComponent,
    CardComponent,
    DetailsComponent,
    CountComponent,
    CompositionComponent,
    BoissonsComponent,
    TailleBoissonsComponent,
    DetailsDescComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    RouterModule,
    LayoutModule,
    FormsModule
  ]
})
export class ProductsModule { }
