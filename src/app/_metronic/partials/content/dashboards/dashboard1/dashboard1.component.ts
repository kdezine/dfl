import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../core';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
})
export class Dashboard1Component implements OnInit {
  dashleads : any[]
  misleads : any[]
  constructor() {}

  ngOnInit(): void {
    this.dashleads = [
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'},
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'},
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'},
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'},
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'},
      {name : 'Napster', email : 'napster@gmail.com', phone  : '8963251470', location: 'Delhi', date : '08/08/2020'}
    ]
    this.misleads = [
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'},
      {name : 'Napster', location: 'Delhi'}
    ]
  }
}
