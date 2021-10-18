import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { errorPages } from './pages';
import { ErrorComponent } from './error.component';
import { ErrorRoutingModule } from './error.routing';

@NgModule({
  declarations: [...errorPages, ErrorComponent],
  imports: [CommonModule, ErrorRoutingModule],
})
export class ErrorModule {}
