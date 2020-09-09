import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditIDoctorComponent } from './edit.component';

const routes: Routes = [{
  path: '',
  component: EditIDoctorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
