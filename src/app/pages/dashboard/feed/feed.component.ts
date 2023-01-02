import { Component, OnInit } from '@angular/core';
import {ArticleService} from "../../../services/article/article.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  constructor(private articleService: ArticleService) {
  }

  articles: any;

  ngOnInit(): void {
    this.articles = this.articleService.getAllPublicArticles().then(res => {
      res.subscribe(result => {
        // @ts-ignore
        this.articles = result.data;
        console.log(result, this.articles);
      })
    });
  }

  showInfo(link: string) {

  }

  save() {

  }

  undo() {

  }

  follow() {

  }
}
