import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListVehiclesComponent } from './list-vehicles/list-vehicles.component';
import { ModalEntryContentComponent } from './modal-entry-content/modal-entry-content.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalConfirmDispatch } from './modal-confirm-dispatch/modal-confirm-dispatch.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ListVehiclesComponent,
    ModalEntryContentComponent,
    ModalConfirmDispatch
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    ListVehiclesComponent,
  ],
  entryComponents: [ModalEntryContentComponent, ModalConfirmDispatch]
})
export class ComponentsModule { }
