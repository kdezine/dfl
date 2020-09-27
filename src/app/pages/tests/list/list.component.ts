import { Component, OnInit } from '@angular/core';
import { AllTestService } from '../../../../services/alltests'
@Component({
  selector: 'app-listtest',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListTestComponent implements OnInit {
  testlist : any[] = []
  
  constructor(private alltests : AllTestService) {
    this.testdata()
   }

  ngOnInit(): void {
  }
  testdata(){
    this.alltests.GetTests().subscribe((Response) =>
    {
      this.testlist = Response.ResponseData
    })
  }

}
