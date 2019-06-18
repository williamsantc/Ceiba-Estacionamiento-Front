import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { ComponentsModule } from './components/components.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import { environment } from './../environments/environment';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './interceptors/index.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    ComponentsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      preventDuplicates: true
    })
  ],
  providers: [
    { provide: "BASE_API_URL", useValue: environment.apiUrl },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
