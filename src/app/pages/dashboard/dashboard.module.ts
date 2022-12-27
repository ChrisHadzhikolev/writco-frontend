import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {RouterModule} from "@angular/router";
import {BasicComponent} from "./basic/basic.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [DashboardComponent, BasicComponent]
})
export class DashboardModule {}
