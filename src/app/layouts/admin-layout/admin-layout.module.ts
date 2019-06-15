import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { BienvenidoComponent } from '../../pages/bienvenido/bienvenido.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ParkingComponent } from 'src/app/pages/parking/parking.component';
import { ComponentsModule } from 'src/app/components/components.module';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    ComponentsModule
  ],
  declarations: [
    BienvenidoComponent,
    ParkingComponent
  ]
})

export class AdminLayoutModule { }
