import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjouterMenuComponent } from './pages/ajouter-menu/ajouter-menu.component';
import { ListeMenuComponent } from './pages/liste-menu/liste-menu.component';
import { ProductsComponent } from './products.component';

const routes: Routes = [
  {path:'', redirectTo:'menu',pathMatch:'full'},
  { path: 'menu', component: ListeMenuComponent},
  { path: 'add-menu', component: AjouterMenuComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
