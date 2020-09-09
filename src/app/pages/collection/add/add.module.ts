import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionAddComponent } from './add.component';



@NgModule({
  declarations: [CollectionAddComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CollectionAddComponent,
      },
    ])
  ],
})
export class AddCollectionModule { }
