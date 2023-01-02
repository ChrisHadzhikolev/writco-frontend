import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {FormControl, FormGroup} from "@angular/forms";
import {ArticleService} from "../../../services/article/article.service";

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.scss']
})
export class NewArticleComponent implements OnInit {

  constructor(private articleService: ArticleService, private router: Router, private toastr: ToastrService) {
  }

  form: FormGroup = new FormGroup({
    title: new FormControl(''),
    category: new FormControl(''),
    description: new FormControl(''),
    content: new FormControl(''),
    private: new FormControl(''),
  });

  async submit() {
    if (this.form.valid) {
      await this.articleService.createArticle(
        this.form.value.title,
        this.form.value.category,
        this.form.value.description,
        this.form.value.content,
        this.form.value.private
      ).then(res=>{
        res.subscribe(result=>{
          if (result.statusCode === 200) {
            this.toastr.info("Article Created", "Success");
            this.form.reset();
          } else {
            this.toastr.error("Something went wrong, please try again", "Error")
          }
        })
      });
    } else {
      console.log("shitty")
    }
  }
  error: string | null | undefined;
  category: string = "Comedy";

  async ngOnInit(): Promise<void> {
  }
}
