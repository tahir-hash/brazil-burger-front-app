import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { LoaderAdminComponent } from './loader-admin/loader-admin.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    LoaderAdminComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderAdminComponent,
    LoaderAdminComponent
  ]
})
export class LayoutModule { }
