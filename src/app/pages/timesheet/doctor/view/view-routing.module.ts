import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewIDoctorComponent } from './view.component';

const routes: Routes = [{
  path: '',
  component: ViewIDoctorComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
