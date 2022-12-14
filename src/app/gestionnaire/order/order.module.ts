import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterCmdPipe } from 'src/app/Pipe/filter-cmd.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterDatePipe } from 'src/app/Pipe/filter-date.pipe';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { ZoneFilterPipe } from 'src/app/Pipe/zone-filter.pipe';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';
import { DetailsLivComponent } from './pages/details-liv/details-liv.component';


@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    FilterCmdPipe,
    FilterDatePipe,
    DeliveryComponent,
    ZoneFilterPipe,
    DeliveryListComponent,
    DetailsLivComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ]
})
export class OrderModule { }
