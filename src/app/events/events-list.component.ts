import {Component} from '@angular/core';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent {
    event1 = {
        id: 1,
        name: "Ubriaco",
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        location: {
            address: "Slagsta Gate Hotel",
            city: "Stockholm",
            country: "Sweden"
        }
    };

    handleEventClicked(data){
        console.log("Received: " + data);
    }
}