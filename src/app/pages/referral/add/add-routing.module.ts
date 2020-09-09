import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddReferralComponent } from './add.component';

const routes: Routes = [{
  path: '',
  component: AddReferralComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddRoutingModule { }
