import { CommunityService } from './../core/services/community.service';
import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { Municipality } from '../core/models/municipality';
import { MunicipalityService } from '../core/services/municipality.service';
import { Community } from '../core/models/community';

@Component({
  selector: 'app-municipalities',
  templateUrl: './municipalities.component.html',
  styleUrls: ['./municipalities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MunicipalitiesComponent implements OnInit {
  municipalities$: Observable<Municipality[]> | undefined;
  municipalityFetchError: any;
  selectedMunicipality: Municipality | undefined;
  communitiesFetchError: any;
  communitites$: Observable<Community[]> | undefined;

  constructor(
    private changeDetector: ChangeDetectorRef,
    private municipalityService: MunicipalityService,
    private communityService: CommunityService,
  ) {}

  ngOnInit(): void {
    this.fetchMunicipalities();
  }

  fetchMunicipalities(): void {
    this.municipalityFetchError = undefined;
    this.municipalities$ = this.municipalityService.get().pipe(
      share(),
      catchError((error: any) => {
        this.municipalityFetchError = error;
        this.changeDetector.detectChanges();
        throw error;
      }),
    );
  }

  select(municipality: Municipality): void {
    this.communitites$ = undefined;
    this.communitiesFetchError = undefined;
    if (!municipality) {
      return;
    }
    this.selectedMunicipality = municipality;

    this.fetchCommunities(municipality.number);
  }

  unselect(): void {
    this.communitiesFetchError = undefined;
    this.communitites$ = undefined;
    this.selectedMunicipality = undefined;
    this.changeDetector.detectChanges();
  }

  fetchCommunities(municipalityNumber: number): void {
    this.communitites$ = this.communityService.getByMunicipalityNumber(municipalityNumber).pipe(
      share(),
      catchError((error) => {
        this.communitiesFetchError = error;
        this.changeDetector.detectChanges();
        throw error;
      }),
    )
  }
}
