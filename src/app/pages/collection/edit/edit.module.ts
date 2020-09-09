import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditCollectionComponent } from './edit.component';



@NgModule({
  declarations: [EditCollectionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EditCollectionComponent,
      },
    ])
  ]
})
export class EditCollectionModule { }
