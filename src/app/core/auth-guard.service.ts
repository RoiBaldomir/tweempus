import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
    this.router.navigate(['/login']);
    return false;
  }

}
