import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";
import { NewArticleComponent } from './new-article/new-article.component';
import { FeedComponent } from './feed/feed.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";



@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  declarations: [DashboardComponent, BasicComponent, NewArticleComponent, FeedComponent]
})
export class DashboardModule {}
