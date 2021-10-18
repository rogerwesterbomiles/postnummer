import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipalitiesComponent } from './municipalities.component';
import { MunicipalitiesRoutingModule } from './municipalities.routing';

@NgModule({
  declarations: [MunicipalitiesComponent],
  imports: [CommonModule, MunicipalitiesRoutingModule],
})
export class MunicipalitiesModule {}
