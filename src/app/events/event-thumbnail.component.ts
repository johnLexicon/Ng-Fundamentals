
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: {{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>&nbsp;
            <span class="pad-left">{{event.location.city}}</span>,&nbsp;
            <span>{{event.location.country}}</span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click me!</button>
    </div>
    `,
    styles: [`
            .pad-left{margin-left:10px;}
            .well div{color:#bbb;}
    `]
})
export class EventThumbnailComponent {
    //The Input decorator is used to be able to receive values from other components.
    @Input() event: any;
    @Output() eventClick = new EventEmitter();
    someProperty: any = "Some value";

    handleClickMe(){
        this.eventClick.emit(this.event.name);
    }

    handleFoo(){
        console.log("Whatever");
    }
}