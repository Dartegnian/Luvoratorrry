import { Component, Input, Output, EventEmitter } from '@angular/core';
//import {  } from 'events';

@Component({
	selector: 'events-thumbnail',
	template: `
	<div class="container">
		<span>ID: {{event.id}}</span>
		<span>Name: {{event.name}}</span>
		<span>Location: {{event.location}}</span>
		<span>Lat: {{event.coordinates.latitude}}</span>
		<span>Long: {{event.coordinates.longitude}}</span>
		<hr/>
		<button class="btn btn-primary" (click)="ClickHandler()">Steve</button> <br/>
		<h1>I LOVE MENHERA-CHAN <3 <3</h1>
		<img src="/assets/images/NanaseKurumi.jpg" height="500px"/>
	</div>
	`
})

export class EventsThumbnailComponent {
	@Input() event:any
	@Output() buttonClick = new EventEmitter();

	ClickHandler() {
		console.log(this.event.name);
		this.buttonClick.emit("CLICKED CLOCKED");
	}
}