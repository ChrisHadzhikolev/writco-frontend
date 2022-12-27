import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {RegisterComponent} from "./register/register.component";
import {LoginModule} from "./login/login.module";




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginModule
  ],
  declarations: [AuthComponent, RegisterComponent]
})
export class AuthModule {}
