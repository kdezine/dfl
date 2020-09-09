import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddInstituteComponent } from './add.component';

const routes: Routes = [{
  path: '',
  component :AddInstituteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
