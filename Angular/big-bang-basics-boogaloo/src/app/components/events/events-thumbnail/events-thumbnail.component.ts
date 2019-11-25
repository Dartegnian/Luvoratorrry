import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
	selector: "events-thumbnail",
	templateUrl: "events-thumbnail.component.html"
})

export class EventsThumbnailComponent {
	@Input() techEvents: any;

	@Output() buttonClick = new EventEmitter();
	@Output() streamData = new EventEmitter();

	eventsBookingDetails: any;
	famousLine = "It's everyday bro! x2";

	variableDeezNuts = "Deez Nuts from child!";

	BookingHandler() {
		this.eventsBookingDetails = {
			name: this.techEvents.name,
			date: this.techEvents.date
		}
		this.buttonClick.emit(this.eventsBookingDetails);
		this.techEvents.booked ? console.log("Booking confirmed!") : console.log("No booking");
	}

	StreamHandler() {
		console.log("Handling stream...");
		this.streamData.emit("Waddup");
	}
	
	logData() {
		console.log(this.techEvents);
		console.log(this.techEvents.name);
	}
}