import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CreateRoutingModule } from './create-routing.module';
import { CreateTestComponent } from './create.component';


@NgModule({
  declarations: [CreateTestComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateTestComponent,
      }
    ])
  ]
})
export class CreateModule { }
