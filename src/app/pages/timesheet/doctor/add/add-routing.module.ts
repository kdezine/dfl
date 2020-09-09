import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddIdoctorComponent } from './add.component';

const routes: Routes = [{
  path: '',
  component: AddIdoctorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
