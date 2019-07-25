import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MsLovelace } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/event-thumbnail.component';
import { NavBar } from './components/navbar/navbar.component';
import { EventService } from './services/event.service';
import { ToastrService } from './services/toastr.service';

@NgModule({
  imports: [
    BrowserModule,
		AppRoutingModule
  ],
  providers: [
    EventService,
    ToastrService
  ],
  declarations: [
		MsLovelace,
		EventsListComponent,
    EventsThumbnailComponent,
    NavBar
  ],
  bootstrap: [MsLovelace]
})
export class AppModule {
}
