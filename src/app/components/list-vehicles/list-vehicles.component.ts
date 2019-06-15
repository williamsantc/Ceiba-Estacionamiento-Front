import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { Fields } from 'src/app/models/Fields';

const FIELDS: Fields[] = [
  { key: 'licencePlate', label: 'Placa' },
  { key: 'vehicleType', label: 'Tipo de vehiculo' },
  { key: 'entryTime', label: 'Fecha y hora de ingreso' },
  { key: 'acciones', label: 'Acciones' }
]


@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit {

  @Input() listEntries: Entry[]
  @Output() dispatchEntry = new EventEmitter<string>();
  fields: Fields[];

  constructor() {
    this.fields = FIELDS;
  }

  async ngOnInit() {
    
  }

  dispatchVehicle(licencePlate: string) {
    this.dispatchEntry.emit(licencePlate)
  }

}
