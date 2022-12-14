import { NgModule } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {LoginComponent} from "./login.component";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import { ToastrModule } from 'ngx-toastr';
import {MatIconModule} from "@angular/material/icon";





@NgModule({
    imports: [
        CommonModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        MatIconModule
    ],
  declarations: [LoginComponent]
})
export class LoginModule {}
