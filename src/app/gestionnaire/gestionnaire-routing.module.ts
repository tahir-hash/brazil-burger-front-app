import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';
import { GestionnaireComponent } from './gestionnaire.component';
import { AuthGuard } from '../AuthGuard/AuthGuard';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
