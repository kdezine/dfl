import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component'
import { DashboardsModule } from 'src/app/_metronic/partials/content/dashboards/dashboards.module';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersComponent,
      },
    ]),
    DashboardsModule,
  ],
})
export class UsersModule {}
