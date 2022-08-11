import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandeComponent } from './commande.component';
import { MesCommandesComponent } from './pages/mes-commandes/mes-commandes.component';
import { PanierComponent } from './pages/panier/panier.component';

const routes: Routes = [
  { path: '', component: PanierComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'mescmd', component: MesCommandesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommandeRoutingModule {}
