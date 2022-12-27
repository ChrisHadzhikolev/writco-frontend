import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./layouts/main/dashboard.component";
import {AuthComponent} from "./layouts/auth/auth.component";
import {BasicComponent} from "./pages/dashboard/basic/basic.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {LoginComponent} from "./pages/auth/login/login.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    // loadComponent: () => import('./pages/auth/auth.component').then(x => x.AuthComponent),
    children: [
      {
        path: 'login',
        component: LoginComponent,
        // loadComponent: () => import('./pages/auth/login/login.component').then(x => x.LoginComponent)
      },
      {
        path: 'register',
        component: RegisterComponent,
        // loadComponent: () => import('./pages/auth/register/register.component').then(x => x.RegisterComponent)
      },
    ],
    // canActivate: []
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'basic',
        component: BasicComponent
      },
    ],
    // loadChildren: () =>
    //   import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
