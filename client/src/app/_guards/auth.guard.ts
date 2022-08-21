import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map } from 'rxjs/operators';
import { Notyf } from 'notyf';
import { Observable } from 'rxjs';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  notif = new Notyf();

  constructor(private accountService: AccountService){

  }
  canActivate(): any {
    return this.accountService.currentUser$.pipe(
      
    )
  }

}
