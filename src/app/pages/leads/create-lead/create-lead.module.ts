import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateLeadComponent } from './create-lead.component';
import { LeadsModule } from 'src/app/_metronic/partials/content/leads/leads.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateLeadComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateLeadComponent,
      }
    ])
    
  ],
})
export class CreateLeadModule {}
