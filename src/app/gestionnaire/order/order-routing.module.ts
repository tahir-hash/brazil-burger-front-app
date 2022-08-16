import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [{ path: 'all', component: OrderListComponent },
{ path: 'delivery', component: DeliveryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
