import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditRoutingModule } from './edit-routing.module';
import { EditTestComponent } from './edit.component';


@NgModule({
  declarations: [EditTestComponent],
  imports: [
    CommonModule,
    EditRoutingModule
  ]
})
export class EditModule { }
