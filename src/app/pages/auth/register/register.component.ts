import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth/auth.service";

@Component({
  selector: 'app-auth-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) {
  }
  async ngOnInit(): Promise<void> {
    // await this.authService.login("lmao", "xd").then(res=>{
    //   console.log(res);
    // });
  }

  // auth() {
  //   this.router.navigate(["/auth"]);
  // }
  //
  // dash() {
  //   this.router.navigate(["/dashboard"]);
  // }
}
