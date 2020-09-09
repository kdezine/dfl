import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadRoutingModule } from './lead-routing.module';
import { LeadReportComponent } from './lead.component';


@NgModule({
  declarations: [LeadReportComponent],
  imports: [
    CommonModule,
    LeadRoutingModule
  ]
})
export class LeadModule { }
