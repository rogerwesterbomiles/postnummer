import { Routes, RouterModule } from '@angular/router';
import { MunicipalitiesComponent } from './municipalities.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipalitiesComponent,
  },
];

export const MunicipalitiesRoutingModule = RouterModule.forChild(routes);
