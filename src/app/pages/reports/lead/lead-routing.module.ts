import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeadReportComponent } from './lead.component';

const routes: Routes = [{
  path:'',
  component: LeadReportComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
