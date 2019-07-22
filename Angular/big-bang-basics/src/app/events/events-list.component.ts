import { Component } from '@angular/core';

@Component({
	selector: 'events-list',
	template: `
		<events-thumbnail (buttonClick)="buttonClickHandler($event)" [event]="event1"></events-thumbnail>
	`
})

export class EventsListComponent {
	event1 = {
		id: 1,
		name: "Party rockers in the house tonight",
		date: '02/23/2019',
		location: "steve's house",
		coordinates: {
			latitude: "6969696",
			longitude: "191919"
		}
	}

	buttonClickHandler(data) {
		console.log(data);
	}
}