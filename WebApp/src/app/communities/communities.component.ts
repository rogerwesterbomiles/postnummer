import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, share } from 'rxjs/operators';
import { Community } from '../core/models/community';
import { CommunityService } from '../core/services/community.service';

@Component({
  selector: 'app-communities',
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommunitiesComponent implements OnInit {
  communities$: Observable<Community[]> | undefined;
  communityFetchError: any;

  constructor(private changeDetector: ChangeDetectorRef, private communityService: CommunityService) { }

  ngOnInit(): void {
    this.fetchCommunity();
  }

  fetchCommunity(): void {
    this.communityFetchError = undefined;
    this.communities$ = this.communityService.get().pipe(
      share(),
      catchError((error: any) => {
        this.communityFetchError = error;
        this.changeDetector.detectChanges();
        throw error;
      }),
    );
  }

}
