import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogueComponent } from './pages/catalogue/catalogue.component';
import { DetailsComponent } from './pages/details/details.component';

const routes: Routes = [
  {
    path: 'catalogue',
    component: CatalogueComponent,
  },
  {
    path: '',
    redirectTo: 'catalogue',
    pathMatch: 'full',
  },
  {
    path: 'details/:id/:type',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
