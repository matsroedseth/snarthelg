import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    NgCircleProgressModule,
    NgCircleProgressModule.forRoot()
  ],
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent]
})
export class SpinnerModule { }
