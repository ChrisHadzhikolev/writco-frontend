import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {CommentsComponent} from "./comments/comments.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule
  ],
  declarations: [CategoriesComponent, CommentsComponent, UserManagerComponent, UnauthorizedComponent]
})
export class AdminModule {}
