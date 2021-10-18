import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { sharedComponents } from './components';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [...sharedComponents],
  imports: [CommonModule, RouterModule],
  exports: [...sharedComponents],
})
export class SharedModule {}
