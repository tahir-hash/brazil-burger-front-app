import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ListeMenuComponent } from './pages/liste-menu/liste-menu.component';
import { AjouterMenuComponent } from './pages/ajouter-menu/ajouter-menu.component';
import { LayoutModule } from '../layout/layout.module';
import { AddMenuComponent } from './components/add-menu/add-menu.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from 'src/app/shared/services/token-interceptor.service';


@NgModule({
  declarations: [
    ProductsComponent,
    ListeMenuComponent,
    AjouterMenuComponent,
    AddMenuComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    LayoutModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorService,multi:true}
  ]
})
export class ProductsModule { }
