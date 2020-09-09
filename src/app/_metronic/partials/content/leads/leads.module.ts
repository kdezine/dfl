import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeadsComponent } from './create-leads/create-leads.component'
import { WidgetsModule } from '../widgets/widgets.module';

@NgModule({
  declarations: [CreateLeadsComponent],
  imports: [CommonModule, WidgetsModule],
  exports: [CreateLeadsComponent],
})
export class LeadsModule {}
