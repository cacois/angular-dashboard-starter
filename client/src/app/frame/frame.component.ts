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
        title: 'Actions',
        iconStyleClass: 'fa fa-gears',
        url: '/actions',
        badges: [
          {
            count: 1234,
            tooltip: 'Total number of actions'
          }
        ]
      },
      {
        title: 'Triggers',
        iconStyleClass: 'fa fa-gears',
        url: '/hello',
        badges: [
          {
            count: 1,
            tooltip: 'Total number of triggers'
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
