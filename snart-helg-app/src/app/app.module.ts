// ====== ./app/app.routes.ts ======
// Imports
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgCircleProgressModule } from 'ng-circle-progress';

// Declarations
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { routing } from './app.routes';
import { ChartComponent } from './home/chart/chart.component';
import { SpinnerComponent } from './home/spinner/spinner.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ChartComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ToolbarModule,
    HttpModule,
    JsonpModule,
    AmChartsModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot(),
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }