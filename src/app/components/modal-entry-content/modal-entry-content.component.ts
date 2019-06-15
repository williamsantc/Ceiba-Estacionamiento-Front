import { Component, Input, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { VehicleType } from 'src/app/models/VehicleType';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

const VEHICLE_TYPES: VehicleType[] = [
  { value: 'CAR', text: 'Carro' },
  { value: 'MOTORCYCLE', text: 'Moto' }
]

@Component({
  selector: 'app-modal-entry',
  templateUrl: './modal-entry-content.component.html',
  styleUrls: ['./modal-entry-content.component.css']
})
export class ModalEntryContentComponent implements OnInit {

  vehicleTypes: VehicleType[];
  entryForm: FormGroup;
  @Input() payload: Entry;

  @ViewChild("licencePlate", { static: false }) licencePlateField: ElementRef<HTMLInputElement>;
  @ViewChild("vehicleType", { static: false }) vehicleTypeField: ElementRef<HTMLSelectElement>;
  @ViewChild("engineDisplacement", { static: false}) engineDisplacementField: ElementRef<HTMLInputElement>;

  constructor(public activeModal: NgbActiveModal, private toast: ToastrService) {
    this.vehicleTypes = VEHICLE_TYPES;
  }

  ngOnInit() {
    this.buildForm()
    this.customValidation()
  }

  buildForm() {
    this.entryForm = new FormGroup({
      'licencePlate': new FormControl(this.payload.licencePlate, Validators.required),
      'vehicleType': new FormControl(this.payload.vehicleType, Validators.required),
      'engineDisplacement': new FormControl(this.payload.engineDisplacement, Validators.required)
    });
  }

  get vehicleType() {
    return this.entryForm.get('vehicleType');
  }

  customValidation() {
    const engineDisplacement = this.entryForm.get('engineDisplacement');
    const vehicleType = this.entryForm.get('vehicleType');

    vehicleType.valueChanges.subscribe(type => {
      if (type === 'CAR') {
        engineDisplacement.setValidators(null);
      }

      if (type === 'MOTORCYCLE') {
        engineDisplacement.setValidators([Validators.required])
      }

      engineDisplacement.updateValueAndValidity();
    })
  }

  saveChanges(){
    const engineDisplacement = this.entryForm.get('engineDisplacement');
    const vehicleType = this.entryForm.get('vehicleType');
    const licencePlate = this.entryForm.get("licencePlate");

    if(licencePlate.errors && licencePlate.errors.required) {
      this.toast.error('El campo placa es requerido.', 'Campos incompletos')
      this.licencePlateField.nativeElement.focus()
      return
    }

    if(vehicleType.errors && vehicleType.errors.required) {
      this.toast.error('El campo tipo vehiculo es requerido.', 'Campos incompletos')
      this.vehicleTypeField.nativeElement.focus()
      return
    }

    if(engineDisplacement.errors && engineDisplacement.errors.required) {
      this.toast.error('El campo cilindraje es requerido.', 'Campos incompletos')
      this.engineDisplacementField.nativeElement.focus()
      return
    }

    this.activeModal.close(this.entryForm);
  }

}
