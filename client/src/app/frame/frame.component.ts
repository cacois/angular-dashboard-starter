import { Component, OnInit } from '@angular/core';
import { VerticalNavigationItem } from 'patternfly-ng/navigation/vertical-navigation/vertical-navigation-item';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {

  navigationItems: VerticalNavigationItem[];

  constructor() { }

  ngOnInit() {
    this.navigationItems = [
      {
        title: 'Home',
        iconStyleClass: 'fa fa-dashboard',
        url: '/hello'
      },
      {
        title: 'Something...',
        iconStyleClass: 'fa fa-gears',
        url: '/something',
        badges: [
          {
            count: 1234,
            tooltip: 'Total number of somethings'
          }
        ]
      },
      {
        title: 'Other',
        iconStyleClass: 'fa fa-gears',
        url: '/other',
        badges: [
          {
            count: 1,
            tooltip: 'Total number of others'
          }
        ]
      },
      {
        title: 'Admin',
        iconStyleClass: 'fa fa-gears',
        url: '/admin'
      }
    ];
  }

  onItemClicked($event: VerticalNavigationItem): void {
    console.log(`clicked: ${JSON.stringify($event)}`);
  }

  onNavigation($event: VerticalNavigationItem): void {
    console.log(`navigated: ${JSON.stringify($event)}`);
  }

}
