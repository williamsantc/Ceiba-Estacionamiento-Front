import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { ModalEntryContentComponent } from './modal-entry-content.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService, ToastrModule } from 'ngx-toastr';
import { Entry } from 'src/app/models/Entry';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const ENTRY_TDB: Entry = {
  licencePlate: 'ASD234',
  vehicleType: 'CAR',
  engineDisplacement: '',
  entryTime: ''
}

describe('ModalEntryContentComponent', () => {
  let component: ModalEntryContentComponent;
  let fixture: ComponentFixture<ModalEntryContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ModalEntryContentComponent],
      providers: [NgbActiveModal, ToastrService],
      imports: [
        ToastrModule.forRoot({
          preventDuplicates: true
        }),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEntryContentComponent);
    component = fixture.componentInstance;
    component.payload = new Entry('', '', '');
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Vehicle type required', () => {

    // Arrange
    const formControls = component.entryForm.controls;
    formControls.licencePlate.setValue(ENTRY_TDB.licencePlate);

    // Act
    const value = component.entryForm.valid;

    // Assert
    expect(value).toBeFalsy()
  });

  it('Engine Displacement not required with car', () => {

    // Arrange
    const formControls = component.entryForm.controls;
    formControls.vehicleType.setValue(ENTRY_TDB.vehicleType);
    formControls.licencePlate.setValue(ENTRY_TDB.licencePlate);

     // Act
     const value = component.entryForm.valid;

    // Assert
    expect(value).toBeTruthy();
  });

  it('Engine Displacement required with motorcycle', () => {

    // Arrange
    const formControls = component.entryForm.controls;
    const motorcycleType = 'MOTORCYCLE';
    formControls.vehicleType.setValue(ENTRY_TDB.vehicleType);
    formControls.licencePlate.setValue(ENTRY_TDB.licencePlate);
    formControls.vehicleType.setValue(motorcycleType);

     // Act
     const value = component.entryForm.valid;

    // Assert
    expect(value).toBeFalsy();
  });
});
