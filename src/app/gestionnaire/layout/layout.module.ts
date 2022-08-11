import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderAdminComponent } from './header-admin/header-admin.component';



@NgModule({
  declarations: [
    HeaderAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderAdminComponent
  ]
})
export class LayoutModule { }
