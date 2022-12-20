import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./layouts/main/main.component";
import {AuthComponent} from "./layouts/auth/auth.component";
import {AuthGuard} from "./guards/auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
    canActivate: []
  },
  {
    path: 'dashboard',
    component: MainComponent,
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
