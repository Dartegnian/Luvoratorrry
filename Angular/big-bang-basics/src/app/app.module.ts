import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MsLovelace } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule,
		AppRoutingModule
  ],
  declarations: [
		MsLovelace,
		EventsListComponent,
		EventsThumbnailComponent
  ],
  bootstrap: [MsLovelace]
})
export class AppModule {
}