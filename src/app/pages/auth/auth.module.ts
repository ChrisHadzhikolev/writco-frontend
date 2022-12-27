import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";



@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [AuthComponent, RegisterComponent, LoginComponent]
})
export class AuthModule {}
