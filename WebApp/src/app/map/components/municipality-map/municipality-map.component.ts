import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as L from 'leaflet';
import { GeojsonService } from 'src/app/core/services/geojson.service';
import { MapSize } from 'src/app/core/types/mapSize';

@Component({
  selector: 'app-municipality-map',
  templateUrl: './municipality-map.component.html',
  styleUrls: ['./municipality-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MunicipalityMapComponent implements OnInit {
  map: L.Map | undefined;
  json: any;
  options = {
    zoom: 4,
    center: L.latLng(65.4904104, 13.2214121),
  };

  private subscriptions = new Subscription();

  constructor(private changeDetection: ChangeDetectorRef, private geojsonService: GeojsonService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  onMapReady(map: L.Map) {
    // this.httpClient.get('assets/norge/2020/geojson/Kommuner-small.json').subscribe((geojsonData: any) => {
    //   L.geoJSON(geojsonData).addTo(map);
    //   this.changeDetection.detectChanges();
    // });

    this.subscriptions.add(
      this.geojsonService
        .getMunicipality(MapSize.Small)
        .pipe()
        .subscribe((geojsonData: any) => {
          L.geoJSON(geojsonData).addTo(map);
          this.changeDetection.detectChanges();
        }),
    );
  }

}
