import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderAdminComponent } from './layout/header-admin/header-admin.component';
import { GestionnaireComponent } from './gestionnaire.component';

const routes: Routes = [
  {path:"", redirectTo:"products", pathMatch:"full"},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionnaireRoutingModule { }
