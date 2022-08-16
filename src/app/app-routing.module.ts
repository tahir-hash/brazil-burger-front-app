import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './AuthGuard/AuthGuard';
import { NotFoundComponent } from './not-found/not-found.component';
import { Role } from './shared/models/Role';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  {
    path: 'admin',
    children: [{
      path: 'products',
      loadChildren: () => import('.//gestionnaire/products/products.module').then(m => m.ProductsModule)
    }, { path: 'order', loadChildren: () => import('.//gestionnaire/order/order.module').then(m => m.OrderModule) }
    ],
    canActivate: [AuthGuard],
    data: {
      role: Role.admin
    }
  },
  { path: 'admin', loadChildren: () => import('./gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule) },

  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
