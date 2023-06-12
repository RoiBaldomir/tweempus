import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';

import { ErrorComponent } from './core/error/error.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    DashboardModule,
    LoginModule,
    ProfileModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
