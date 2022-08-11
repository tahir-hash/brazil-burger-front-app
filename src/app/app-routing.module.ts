import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: '', redirectTo: 'client', pathMatch: 'full' },
  { path: 'securite', loadChildren: () => import('./securite/securite.module').then(m => m.SecuriteModule) },
  { path: 'admin', loadChildren: () => import('./gestionnaire/gestionnaire.module').then(m => m.GestionnaireModule) },
  { path: '**', component: NotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
