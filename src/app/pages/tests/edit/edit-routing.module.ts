import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditTestComponent } from './edit.component';

const routes: Routes = [{
  path:'',
  component: EditTestComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
