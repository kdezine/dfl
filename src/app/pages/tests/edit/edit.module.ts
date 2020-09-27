import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { EditRoutingModule } from './edit-routing.module';
import { EditTestComponent } from './edit.component';


@NgModule({
  declarations: [EditTestComponent],
  imports: [
    CommonModule,ReactiveFormsModule, FormsModule,
    
    RouterModule.forChild([
      {
        path: '',
        component: EditTestComponent,
      }
    ])
  ]
})
export class EditModule { }
