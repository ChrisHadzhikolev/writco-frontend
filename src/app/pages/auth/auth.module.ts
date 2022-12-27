import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [LoginComponent, AuthComponent]
})
export class AuthModule {}
