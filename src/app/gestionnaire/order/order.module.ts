import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { LayoutModule } from '../layout/layout.module';
import { FormsModule } from '@angular/forms';
import { FilterCmdPipe } from 'src/app/Pipe/filter-cmd.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { FilterDatePipe } from 'src/app/Pipe/filter-date.pipe';


@NgModule({
  declarations: [
    OrderComponent,
    OrderListComponent,
    FilterCmdPipe,
    FilterDatePipe
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    LayoutModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class OrderModule { }
