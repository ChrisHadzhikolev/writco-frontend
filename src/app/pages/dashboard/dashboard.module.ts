import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";
import { NewArticleComponent } from './new-article/new-article.component';
import { FeedComponent } from './feed/feed.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardComponent, BasicComponent, NewArticleComponent, FeedComponent]
})
export class DashboardModule {}
