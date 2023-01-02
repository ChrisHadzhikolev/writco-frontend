import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthComponent} from "./auth.component";
import {RouterModule} from "@angular/router";
import {LoginModule} from "./login/login.module";
import {RegisterModule} from "./register/register.module";




@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    LoginModule,
    RegisterModule
  ],
  declarations: [AuthComponent]
})
export class AuthModule {}
