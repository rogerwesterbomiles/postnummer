import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunitiesComponent } from './communities.component';
import { CommunititesRoutingModule } from './communities.routing';

@NgModule({
  declarations: [CommunitiesComponent],
  imports: [CommonModule, CommunititesRoutingModule],
})
export class CommunitiesModule {}
