import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTabsModule
  ],
  declarations: [AboutComponent],
  exports: [AboutComponent]
})
export class AboutModule { }
