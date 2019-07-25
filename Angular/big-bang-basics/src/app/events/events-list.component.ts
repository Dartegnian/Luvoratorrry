import { Component, OnInit } from '@angular/core'
import { EventService } from '../services/event.service'
import { ToastrService } from '../services/toastr.service'

declare let toastr

@Component({
	selector: 'events-list',
	templateUrl: './events-list.component.html'
})

export class EventsListComponent implements OnInit {
  events:any[]

	constructor(
    private eventService: EventService,
    private toastrService: ToastrService
  ) {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.events = this.eventService.getEvents()
  }

  showToast(toastName, eventBooked) {
    eventBooked ?
      this.toastrService.success("You have been booked for " + toastName + "!") :
      this.toastrService.error("You have been unbooked from " + toastName + ".")
  }

	buttonClickHandler(data) {
		console.log(data)
  }

  ParentPass(message) {
    console.log('hello ', message)
  }
}
