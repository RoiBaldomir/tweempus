import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from './auth-guard.service';

import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    ErrorComponent
  ],
  providers: [
    AuthGuardService
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    HeaderComponent,
    NavComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
