import { Injectable } from "@angular/core";

@Injectable()
export class EventsDataService {
	getEventsData() {
		return eventsData;
	}
}

export const eventsData = {
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