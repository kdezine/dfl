import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-tablecollection',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class CollectionTableComponent implements OnInit {
  page3 = 4;
  clist : any[]
  // collectionSize : any
  constructor() { }

  ngOnInit(): void {
    this.clist = [
      {name : 'Hayes Boule', email : 'hboule0@hp.com', state : 'State', city : 'City', phone : '7894561230', payment : 'Approved', center : 'Center Name', status : 'Info'},
      {name : 'Humbert Bresnen', email : 'hbresnen1@theguardian.com', state : 'Vietnam', city : 'Code: VN', phone : '7894561230', payment : 'Pending', center : 'Hodkiewicz and Sons', status : 'Delivered'},
      {name : 'Jareb Labro', email : 'jlabro2@kickstarter.com', state : 'Philippines', city : 'Code: PH', phone : '7894561230', payment : 'Approved', center : 'Kuhlman Inc', status : 'Pending'},
      {name : 'Krishnah Tosspell', email : 'ktosspell3@flickr.com', state : 'China', city : 'Code: CN', phone : '7894561230', payment : 'Paid', center : 'Prosacco-Kessler', status : 'Canceled'},
      {name : 'Dale Kernan', email : 'dkernan4@mapquest.com', state : 'United States', city : 'Code: US', phone : '7894561230', payment : 'Rejected', center : 'Bernier and Sons', status : 'Danger'}
    ]
  }

}
