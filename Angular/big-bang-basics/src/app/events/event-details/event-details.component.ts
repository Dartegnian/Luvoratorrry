import { Component } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  section: EventDetails,
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding-left: 20px; padding-right: 20px;}
  `]
})

export class EventDetailsComponent {

  constructor(private event_details: EventService) {

  }

  ngOnInit(): void {
    event: any;
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.event = this,event.getEvents(1);
  }
}
