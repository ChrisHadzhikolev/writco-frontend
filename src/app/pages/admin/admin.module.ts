import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {CategoriesComponent} from "./categories/categories.component";
import {CommentsComponent} from "./comments/comments.component";
import {UserManagerComponent} from "./user-manager/user-manager.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CategoriesComponent, CommentsComponent, UserManagerComponent]
})
export class AdminModule {}
