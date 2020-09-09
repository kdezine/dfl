import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeadsComponent } from './leads.component';
import { LeadsModule } from 'src/app/_metronic/partials/content/leads/leads.module';

@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LeadsComponent,
      },
    ]),
    LeadsModule,
  ],
})
export class ALeadsModule {}
