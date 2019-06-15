import { Routes } from '@angular/router';

import { BienvenidoComponent } from '../../pages/bienvenido/bienvenido.component';
import { ParkingComponent } from 'src/app/pages/parking/parking.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'bienvenido', component: BienvenidoComponent },
    { path: 'parking', component: ParkingComponent }
];
