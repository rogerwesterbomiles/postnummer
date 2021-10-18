import { MapComponent } from './map.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MapComponent,
  },
];

export const MapRoutingModule = RouterModule.forChild(routes);
