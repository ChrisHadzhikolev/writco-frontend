import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router, private toastr: ToastrService) {
  }

  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', Validators.email),
    username: new FormControl(''),
    password: new FormControl('', Validators.minLength(8)),
    confirmPassword: new FormControl('', Validators.minLength(8)),
  });

  getFormValidationErrors() {
    Object.keys(this.form.controls).forEach(key => {
      // @ts-ignore
      const controlErrors: ValidationErrors = this.form.get(key).errors;
      if (controlErrors != null) {
        Object.keys(controlErrors).forEach(keyError => {
          this.toastr.error('Invalid Field: ' + key, 'Error');
        });
      }
    });
  }


  async submit() {
    if (this.form.valid) {
      if (this.form.value.password === this.form.value.confirmPassword && this.form.value.password.length > 7){
        await this.authService.register(this.form.value.email, this.form.value.firstName, this.form.value.lastName, this.form.value.username, this.form.value.password, false).then(res=>{
          res.subscribe((result: any)=>{
            if (result.statusCode === 200){
              this.router.navigate(["/auth/login"])
            }
          }, err =>{
              this.toastr.error("Duplicate username and/or email", "Error")
          })
        })
      }else{
        this.toastr.error('password miss match or password under 8 characters', 'Error');
      }
    } else {
      this.getFormValidationErrors()
    }
  }
  error: string | null | undefined;

  async ngOnInit(): Promise<void> {
  }

  goToLogin() {
    this.router.navigate(["/auth/login"])
  }
}
