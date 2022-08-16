import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgToastModule } from 'ng-angular-popup';
import { AuthGuard } from './AuthGuard/AuthGuard';
import { ZoneFilterPipe } from './Pipe/zone-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ZoneFilterPipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgToastModule,
    FormsModule
    ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }

