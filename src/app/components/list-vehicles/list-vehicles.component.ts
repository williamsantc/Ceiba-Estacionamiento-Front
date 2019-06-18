import { Component, OnInit, Input, EventEmitter, Output, ComponentRef, ComponentFactory, ViewContainerRef, ComponentFactoryResolver, OnDestroy } from '@angular/core';
import { Entry } from 'src/app/models/Entry';
import { Fields } from 'src/app/models/Fields';
import { BreakPointComponent } from '../break-point/break-point.component';

const FIELDS: Fields[] = [
  { key: 'licencePlate', label: 'Placa' },
  { key: 'vehicleType', label: 'Tipo de vehiculo' },
  { key: 'entryTime', label: 'Registro de ingreso' },
  { key: 'acciones', label: 'Acciones' }
]


@Component({
  selector: 'app-list-vehicles',
  templateUrl: './list-vehicles.component.html',
  styleUrls: ['./list-vehicles.component.css']
})
export class ListVehiclesComponent implements OnInit, OnDestroy {

  @Input() listEntries: Entry[]
  @Output() dispatchEntry = new EventEmitter<string>();
  fields: Fields[];
  private componentFactory: ComponentFactory<BreakPointComponent>;
  private breakPointRef: ComponentRef<BreakPointComponent>;
  private breakPoint: BreakPointComponent;

  constructor(private viewContainerRef: ViewContainerRef,
    private componentFactoryResolver: ComponentFactoryResolver) {
    this.fields = FIELDS;
  }


  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(BreakPointComponent);
    this.breakPointRef = this.viewContainerRef.createComponent(this.componentFactory)
    this.breakPoint = this.breakPointRef.instance;
  }

  ngOnDestroy(): void {
    this.breakPointRef.destroy()
  }

  dispatchVehicle(licencePlate: string) {
    this.dispatchEntry.emit(licencePlate)
  }

}
