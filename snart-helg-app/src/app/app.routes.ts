// Imports
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

// Route Configuration
export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent}
  ];

  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);