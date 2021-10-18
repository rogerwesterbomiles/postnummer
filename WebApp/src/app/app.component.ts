import { ThemeService } from './core/services/theme.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isDark = false;

  constructor(private changeDetector: ChangeDetectorRef, private themeService: ThemeService) {}

  ngOnInit(): void {
    this.themeService.isDark.subscribe((value) => {
      this.isDark = value;
      this.changeDetector.detectChanges();
    });
  }
}
