import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Municipality } from '../models/municipality';

@Injectable({
  providedIn: 'root',
})
export class MunicipalityService {
  private apiBase = environment.backend.uri;

  constructor(private httpClient: HttpClient) {}

  get(): Observable<Municipality[]> {
    return this.httpClient.get<Municipality[]>(`${this.apiBase}/Municipality`);
  }

  getByNumber(number: number): Observable<Municipality[]> {
    return this.httpClient.get<Municipality[]>(`${this.apiBase}/Municipality/${number}`);
  }
}
