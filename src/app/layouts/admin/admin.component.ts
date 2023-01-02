import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  constructor(private router: Router, private authService: AuthService) {
  }
  categories() {
    this.router.navigate(["admin/categories"]);
  }

  comments() {
    this.router.navigate(["admin/comments"]);
  }

  userManagement() {
    this.router.navigate(["admin/usermanagement"]);
  }

  logout() {
    this.authService.logout();
  }
}
