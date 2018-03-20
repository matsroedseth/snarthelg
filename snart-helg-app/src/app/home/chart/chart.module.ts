import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart.component';
import { AmChartsModule } from "@amcharts/amcharts3-angular";


@NgModule({
  imports: [
    CommonModule,
    AmChartsModule,
  ],
  declarations: [ChartComponent],
  exports: [ChartComponent]
})
export class ChartModule { }
