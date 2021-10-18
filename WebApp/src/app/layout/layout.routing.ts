import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('../dashboard/dashboard.module').then((m) => m.DashboardModule),
      },
      {
        path: 'fylker',
        loadChildren: () => import('../municipalities/municipalities.module').then((m) => m.MunicipalitiesModule),
      },
      {
        path: 'kommuner',
        loadChildren: () => import('../communities/communities.module').then((m) => m.CommunitiesModule),
      },
      {
        path: 'kart',
        loadChildren: () => import('../map/map.module').then((m) => m.MapModule),
      },
      { path: '**', redirectTo: 'error/404' },
    ],
  },
  { path: '**', redirectTo: 'error/404' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {}
