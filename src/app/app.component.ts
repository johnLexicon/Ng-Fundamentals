import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
      <nav-bar></nav-bar>
      <events-list></events-list>
    `
})
export class AppComponent {
  title = 'John';
}
