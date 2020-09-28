import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewRoutingModule } from './view-routing.module';
import { ViewComponent } from './view.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule, FormsModule,
    ViewRoutingModule
  ]
})
export class ViewModule { }
