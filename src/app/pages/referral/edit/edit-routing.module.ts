import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditReferralComponent } from './edit.component';

const routes: Routes = [{
  path:'',
  component: EditReferralComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditRoutingModule { }
