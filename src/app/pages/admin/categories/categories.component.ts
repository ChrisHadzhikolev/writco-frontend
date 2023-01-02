import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

 async ngOnInit(){
   const user = await this.authService.getUser();
   // @ts-ignore
   if(user.role !== "admin"){
     this.router.navigate(["admin/unauthorized"])
   }
 }
}
