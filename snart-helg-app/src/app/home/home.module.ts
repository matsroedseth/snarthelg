import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SpinnerModule } from './spinner/spinner.module';
import { ChartModule } from './chart/chart.module';
import { MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    SpinnerModule,
    ChartModule,
    MatSlideToggleModule,
    FlexLayoutModule,
    MatSlideToggleModule
  ],
  declarations: [ HomeComponent ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
