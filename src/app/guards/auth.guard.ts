import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) { }

  canActivate(): Promise<boolean> {
  //   return new Promise((resolve) => {
  //     if(!localStorage.getItem('token')){
  //       this.authService.logout();
  //       resolve(false);
  //     }
  //     const token = localStorage.getItem('token');
  //     const currentUser: any = localStorage.getItem('currentUser');
  //     this.authService.userIsLoggedIn().subscribe(
  //       //TODO: check with res the roles of the user and the token.
  //       (res) => {
  //         // if (currentUser.role === 'unsubscribed') {
  //         //   this.router.navigate(['/subscriptions']);
  //         //   resolve(false);
  //         // }
  //         // TODO should also check if the token is valid and for this application
  //         if (token) {
  //           resolve(true);
  //         }
  //         else {
  //           this.authService.logout();
  //           resolve(false);
  //         }
  //       },
  //       (err) => {
  //         this.authService.logout();
  //         resolve(false);
  //       }
  //     );
  //   });
  // }
    // @ts-ignore
    return null;
}
}
