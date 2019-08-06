import { Component } from '@angular/core';

@Component({
	selector: "events-list",
	templateUrl: "events-list.component.html"
})

export class EventsListComponent {
	techEvent1 = {
		id: 1,
		name: 'It\'s everyday bro',
		date: '1/17/2020',
		time: '12:00 pm',
		price: 399.99,
		imageUrl: 'aaa',
		booked: false,
		location: {
			address: '#117 Jake Paul St.',
			city: 'England is my city',
			country: 'United Kingdom',
		}
	}

	ButtonClickHandler(eventInfo) {
		this.techEvent1.booked = true;
		console.log("One booking for: " + eventInfo.name + " on " + eventInfo.date + "!");
	}
}