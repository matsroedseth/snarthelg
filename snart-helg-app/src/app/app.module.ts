// ====== ./app/app.routes.ts ======
// Imports
import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ToolbarModule } from './toolbar/toolbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';

// Declarations
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToolbarModule,
    HttpModule,
    JsonpModule,
    FlexLayoutModule,
    CoreModule,
    HomeModule,
    AboutModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }