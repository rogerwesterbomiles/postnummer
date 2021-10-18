import { ThemeService } from './../../../core/services/theme.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
})
export class TopHeaderComponent implements OnInit {
  isDark = false;

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.isDark = this.themeService.isDark.value;
  }

  toggleDark(): void {
    this.isDark = !this.isDark;
    this.themeService.setDark(this.isDark);
  }
}
