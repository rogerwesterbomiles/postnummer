import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from './map.component';
import { mapComponents } from './components';
import { MapRoutingModule } from './map.routing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [MapComponent, ...mapComponents],
  imports: [CommonModule, MapRoutingModule, LeafletModule],
})
export class MapModule {}
