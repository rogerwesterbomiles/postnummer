import { Community } from './../core/models/community';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { Municipality } from '../core/models/municipality';
import { MunicipalityService } from '../core/services/municipality.service';
import { CommunityService } from '../core/services/community.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  municipalities$: Observable<Municipality[]> | undefined;
  municipalityFetchError: any;

  communities$: Observable<Community[]> | undefined;
  communityFetchError: any;

  constructor(private municipalityService: MunicipalityService, private communityService: CommunityService) {}

  ngOnInit(): void {
    this.fetchCommunity();
    this.fetchMunicipalities();
  }

  fetchMunicipalities(): void {
    this.municipalityFetchError = undefined;
    this.municipalities$ = this.municipalityService.get().pipe(
      share(),
      catchError((error: any) => {
        this.municipalityFetchError = error;
        throw error;
      }),
    );
  }

  fetchCommunity(): void {
    this.communityFetchError = undefined;
    this.communities$ = this.communityService.get().pipe(
      share(),
      catchError((error: any) => {
        this.communityFetchError = error;
        throw error;
      }),
    );
  }
}
