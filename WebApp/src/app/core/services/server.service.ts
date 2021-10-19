import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  private apiBase = environment.backend.uri;

  constructor(private httpClient: HttpClient) {}

  metadata(): Observable<any> {
    const url = `${this.apiBase}/Server/metadata`;
    return this.httpClient.get(url);
  }
}
