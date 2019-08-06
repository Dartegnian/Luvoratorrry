import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TechEventsApp } from './tech-events-app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    TechEventsApp
  ],
  bootstrap: [TechEventsApp]
})
export class AppModule { }
