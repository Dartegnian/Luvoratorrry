import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { TechEventsApp } from './tech-events-app.component';

/* Components */
import { EventsListComponent } from './components/events/events-list/events-list.component';
import { EventsThumbnailComponent } from './components/events/events-thumbnail/events-thumbnail.component';

/* Services */
import { EventsDataService } from './services/events-data.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
		TechEventsApp,
		
		EventsListComponent,
		EventsThumbnailComponent
	],
	providers: [EventsDataService],
  bootstrap: [TechEventsApp]
})
export class AppModule { }
