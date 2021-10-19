import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ServerService } from '../core/services/server.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent implements OnInit {
  appVersion = environment.appVersion;

  serverMetadata$: Observable<any> | undefined;
  metadataFetchError: any;

  constructor(private changeDetector: ChangeDetectorRef, private serverService: ServerService) {}

  ngOnInit(): void {
    this.serverMetadata$ = this.serverService.metadata().pipe(
      catchError((error: any) => {
        this.metadataFetchError = error;
        this.changeDetector.detectChanges();
        throw error;
      }),
    );
  }
}
