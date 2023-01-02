import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-main-navigation',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private router: Router, private authService: AuthService) {
  }
  exploreArticles() {
    this.router.navigate(["/dashboard/feed"]);
  }

  newArticle() {
    this.router.navigate(["/dashboard/new"]);
  }

  profile() {
    this.router.navigate(["/dashboard/basic"]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(["/auth/login"])
  }
}
