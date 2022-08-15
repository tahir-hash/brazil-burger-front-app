import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandeRoutingModule } from './commande-routing.module';
import { CommandeComponent } from './commande.component';
import { PanierComponent } from './pages/panier/panier.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { MesCommandesComponent } from './pages/mes-commandes/mes-commandes.component';
import { RouterModule } from '@angular/router';
import { EmptyCartComponent } from './components/empty-cart/empty-cart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterCmdPipe } from 'src/app/Pipe/filter-cmd.pipe';
import { DateFilter } from 'src/app/Pipe/DateFilter';
@NgModule({
  declarations: [
    CommandeComponent,
    PanierComponent,
    MesCommandesComponent,
    EmptyCartComponent,
    FilterCmdPipe,
    DateFilter
  ],
  imports: [
    CommonModule,
    CommandeRoutingModule,
    LayoutModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class CommandeModule { }
