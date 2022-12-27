import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {DashboardModule} from "./pages/dashboard/dashboard.module";
import {AuthModule} from "./pages/auth/auth.module";
import {AuthComponent} from "./layouts/auth/auth.component";
import {DashboardComponent} from "./layouts/main/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    DashboardModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
