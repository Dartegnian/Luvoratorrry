import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../../../services/events-data.service';

@Component({
	selector: "events-list",
	templateUrl: "events-list.component.html"
})

export class EventsListComponent implements OnInit {
	techEvent1: any;

	constructor(private eventsDataService: EventsDataService) {}

	ngOnInit() {
		this.techEvent1 = this.eventsDataService.getEventsData();
	}

	ButtonClickHandler(eventInfo) {
		this.techEvent1.booked = true;
		console.log("One booking for: " + eventInfo.name + " on " + eventInfo.date + "!");
	}
}