import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AddUserComponent } from './adduser.component'
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';

@NgModule({
  declarations: [AddUserComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: AddUserComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class AddUserModule {}
