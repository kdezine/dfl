import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateLeadComponent } from './create-lead.component';
import { LeadsModule } from 'src/app/_metronic/partials/content/leads/leads.module';


@NgModule({
  declarations: [CreateLeadComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateLeadComponent,
      },
    ]),
    LeadsModule
  ],
})
export class CreateLeadModule {}
