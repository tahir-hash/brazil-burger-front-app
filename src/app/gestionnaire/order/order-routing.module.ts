import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from './order.component';
import { DeliveryListComponent } from './pages/delivery-list/delivery-list.component';
import { DeliveryComponent } from './pages/delivery/delivery.component';
import { DetailsLivComponent } from './pages/details-liv/details-liv.component';
import { OrderListComponent } from './pages/order-list/order-list.component';

const routes: Routes = [{ path: 'all', component: OrderListComponent },
{ path: 'delivery', component: DeliveryListComponent},
{ path: 'delivery-add', component: DeliveryComponent},
{path: 'delivery/:id', component:DetailsLivComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
