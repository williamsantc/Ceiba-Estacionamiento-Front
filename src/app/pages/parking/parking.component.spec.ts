import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkingComponent } from './parking.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ModalEntryContentComponent } from 'src/app/components/modal-entry-content/modal-entry-content.component';
import { ModalConfirmDispatch } from 'src/app/components/modal-confirm-dispatch/modal-confirm-dispatch.component';
import { ModalSuccessComponent } from 'src/app/components/modal-success/modal-success.component';
import { ListVehiclesComponent } from 'src/app/components/list-vehicles/list-vehicles.component';
import { ParkingService } from 'src/app/services/parking.service';
import { HttpClientModule } from '@angular/common/http';

describe('ParkingComponent', () => {
  let component: ParkingComponent;
  let fixture: ComponentFixture<ParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ParkingComponent,
        ListVehiclesComponent,
        ModalEntryContentComponent,
        ModalConfirmDispatch,
        ModalSuccessComponent
      ],
      providers: [NgbModal, ParkingService],
      imports: [
        ToastrModule.forRoot({
          preventDuplicates: true
        }),
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    }).overrideModule(BrowserDynamicTestingModule, {
      set: {
        entryComponents: [ModalEntryContentComponent, ModalConfirmDispatch, ModalSuccessComponent]
      }
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
