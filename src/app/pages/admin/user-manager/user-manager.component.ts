import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  async ngOnInit() {

    const user = await this.authService.getUser();
    // @ts-ignore
    if(user.role !== "admin"){
      this.router.navigate(["admin/unauthorized"])
    }
  }
}
