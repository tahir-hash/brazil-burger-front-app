import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';
import { AuthGuard } from '../AuthGuard/AuthGuard';
import { GestionnaireComponent } from './gestionnaire.component';

const routes: Routes = [
  {path:'', redirectTo:'dashboard',pathMatch:'full'},
  { path: 'dashboard', component: GestionnaireComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)},
  { path: 'order', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
