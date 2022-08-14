import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { LoaderAdminComponent } from './loader-admin/loader-admin.component';



@NgModule({
  declarations: [
    HeaderAdminComponent,
    LoaderAdminComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderAdminComponent,
    LoaderAdminComponent
  ]
})
export class LayoutModule { }
