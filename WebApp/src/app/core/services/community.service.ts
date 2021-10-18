import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Community } from '../models/community';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private apiBase = environment.backend.uri;

  constructor(private httpClient: HttpClient) { }

  get(): Observable<Community[]> {
    return this.httpClient.get<Community[]>(`${this.apiBase}/Community`);
  }

  getByNumber(number: number): Observable<Community> {
    return this.httpClient.get<Community>(`${this.apiBase}/Community/${number}`);
  }

  getByMunicipalityNumber(municipalityNumber: number): Observable<Community[]> {
    return this.httpClient.get<Community[]>(`${this.apiBase}/Community/Municipality/${municipalityNumber}`);
  }
}
