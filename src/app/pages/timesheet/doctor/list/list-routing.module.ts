import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListIDoctorComponent } from './list.component';

const routes: Routes = [{
  path: '',
  component: ListIDoctorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule { }
