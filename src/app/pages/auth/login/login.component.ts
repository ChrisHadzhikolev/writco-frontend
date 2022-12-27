import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-auth-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  form: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      await this.authService.login(this.form.value.email, this.form.value.password).then(res=>{
        res.subscribe(ress=>{
          console.log(ress)
        }, err =>{
          if (err.error.statusCode === 400){
            this.toastr.error("Please, try again", "Wrong Credentials")
          }
        })
      })
    }
  }
  error: string | null | undefined;

  async ngOnInit(): Promise<void> {
  }

  // auth() {
  //   this.router.navigate(["/auth"]);
  // }
  //
  // dash() {
  //   this.router.navigate(["/dashboard"]);
  // }
}
