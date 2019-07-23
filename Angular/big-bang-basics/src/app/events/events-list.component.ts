import { Component } from '@angular/core';

@Component({
	selector: 'events-list',
	templateUrl: './events-list.component.html'
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
    },
    picture: "/assets/images/sticker (32).png",
    speaker: "Menhera-chan",
    booked: false
	}

	buttonClickHandler(data) {
		console.log(data);
  }

  ParentPass(message) {
    console.log('hello ', message);
  }
}
