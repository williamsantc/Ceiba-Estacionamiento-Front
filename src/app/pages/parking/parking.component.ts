import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { VehicleType } from 'src/app/models/VehicleType';
import { Entry } from 'src/app/models/Entry';
import { ParkingService } from 'src/app/services/parking.service';
import { ModalEntryContentComponent } from 'src/app/components/modal-entry-content/modal-entry-content.component';
import { FormGroup } from '@angular/forms';
import { ResponseEntry } from 'src/app/models/Response';
import { ModalConfirmDispatch } from 'src/app/components/modal-confirm-dispatch/modal-confirm-dispatch.component';

const VEHICLE_TYPES: VehicleType[] = [
  { value: 'CAR', text: 'Carro' },
  { value: 'MOTORCYCLE', text: 'Moto' }
]

const TYPES: Object = {
  CAR: 'Carro',
  MOTORCYCLE: 'Moto'
}

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css'],
  providers: [ParkingService]
})
export class ParkingComponent implements OnInit {

  closeResult: string;
  vehicleTypes: VehicleType[];
  payload: Entry;
  listEntries: Entry[];

  constructor(private modalService: NgbModal, private toast: ToastrService, private _parkingService: ParkingService) {
    this.payload = {
      engineDisplacement: '',
      licencePlate: '',
      vehicleType: '',
      entryTime: ''
    }
    this.vehicleTypes = VEHICLE_TYPES;
  }

  async openModal() {
    const modalRef = this.modalService.open(ModalEntryContentComponent, { ariaLabelledBy: 'modal-basic-title' })
    modalRef.componentInstance.payload = this.payload;

    let response: FormGroup | null = null;
    try {
      response = await modalRef.result;
    } catch (error) {
      this.toast.info('Cambios no almacenados', 'Operación cancelada')
    }

    if (!response) {
      return
    }

    const licencePlate = response.get('licencePlate').value;
    const engineDisplacement = response.get('engineDisplacement').value;
    const vehicleType = response.get('vehicleType').value;

    const entry: Entry = new Entry(licencePlate, vehicleType, engineDisplacement);
    console.log(entry)
    const exec = await this._parkingService.saveEntry(entry)
    exec.subscribe(() => {
      this.toast.success("Ingreso registrado correctamente", "Éxito")
      this.getEntries()
    }, err => {
      this.toast.error(err.error.message, "Error")
    })

  }

  async ngOnInit() {
    await this.getEntries()
  }

  async getEntries() {
    const exec = await this._parkingService.getVehicles()
    exec.subscribe(entries => {
      this.listEntries = entries.map(entry => ({ ...entry, vehicleType: TYPES[entry.vehicleType] }))
    })
  }

  async dispatchEntry(licencePlate: string) {
    console.log(licencePlate)
    const modalRef = this.modalService.open(ModalConfirmDispatch, { ariaLabelledBy: 'modal-basic-title' })
    modalRef.componentInstance.licencePlate = licencePlate;

    let response: boolean | null = null
    try {
      response = await modalRef.result;
    } catch (error) {
      this.toast.info('Cambios no almacenados', 'Operación cancelada')
    }

    if (!response) {
      return
    }

    const exec = await this._parkingService.dispatchEntry(new Entry(licencePlate, null, null))
    exec.subscribe((resp: ResponseEntry) => {
      console.log(resp)
    }, err => {
      this.toast.error(err.error.message, "Error")
    })
  }



}
