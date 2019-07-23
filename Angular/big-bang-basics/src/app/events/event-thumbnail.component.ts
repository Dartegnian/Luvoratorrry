import { Component, Input, Output, EventEmitter } from '@angular/core';
//import {  } from 'events';

@Component({
	selector: 'events-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styles: [`
    .pad-left { margin-left: 20px; }
    .pad-top {margin-top: 20px;}
  `]
})

export class EventsThumbnailComponent {
	@Input() event:any
  @Output() buttonClick = new EventEmitter();
  @Output() passwordInfo = new EventEmitter();
  password:string = "";
  someProperty:any = {
    title: "Fame Monster"
  }

	ClickHandler() {
		console.log(this.event.name);
		this.buttonClick.emit("CLICKED CLOCKED");
  }

  SubmitHandler(event: any) {
    this.passwordInfo.emit(event);
    console.log(event);
  }

  logFoo() {
    if (this.event.booked) {
      this.event.booked = false;
      this.event.picture = "/assets/images/sticker (32).png";
    }
    else {
      this.event.booked = true;
      this.event.picture = "/assets/images/sticker (5).png";
    }
    console.log("fooman");
  }
}
