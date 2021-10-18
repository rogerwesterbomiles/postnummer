import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { MapSize } from '../types/mapSize';

@Injectable({
  providedIn: 'root'
})
export class GeojsonService {
  private apiBase = environment.backend.uri;

  constructor(private httpClient: HttpClient) { }

  getMunicipality(mapSize: MapSize): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBase}/GeoJson/municipality/${mapSize}`);
  }

  getCommunity(mapSize: MapSize): Observable<any> {
    return this.httpClient.get<any>(`${this.apiBase}/GeoJson/community/${mapSize}`);
  }
}
