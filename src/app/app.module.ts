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
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {AdminComponent} from "./layouts/admin/admin.component";
import {AdminModule} from "./pages/admin/admin.module";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    DashboardModule,
    AdminModule,
    AuthModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
