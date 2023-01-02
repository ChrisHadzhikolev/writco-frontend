import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./layouts/main/dashboard.component";
import {AuthComponent} from "./layouts/auth/auth.component";
import {BasicComponent} from "./pages/dashboard/basic/basic.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {FeedComponent} from "./pages/dashboard/feed/feed.component";
import {NewArticleComponent} from "./pages/dashboard/new-article/new-article.component";
import {AdminComponent} from "./layouts/admin/admin.component";
import {CategoriesComponent} from "./pages/admin/categories/categories.component";
import {CommentsComponent} from "./pages/admin/comments/comments.component";
import {UserManagerComponent} from "./pages/admin/user-manager/user-manager.component";
import {UnauthorizedComponent} from "./pages/admin/unauthorized/unauthorized.component";

const routes: Routes = [
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
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
      {
        path: 'feed',
        component: FeedComponent
      },
      {
        path: 'new',
        component: NewArticleComponent
      },
    ],
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
    // canActivate: []
  },
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'categories',
        component: CategoriesComponent
      },
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'usermanagement',
        component: UserManagerComponent
      },
      {
        path: 'unauthorized',
        component: UnauthorizedComponent
      },
    ],
    // canActivate: []
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
