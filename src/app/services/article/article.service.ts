import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
// @ts-ignore
import { reject } from 'lodash'
import {MainService} from "../main/main.service";
import {Observable} from "rxjs";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  constructor(
    private router: Router,
    private http: HttpClient,
    private BaseService: MainService,
    private authService: AuthService) {}

  async getAllPublicArticles() {
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const url = this.BaseService.getArticleApiUrl() + `/article/public/articles`;

    return this.http.get(url, {headers});
  }

  async getArticleById(id: string) {
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const user = await this.authService.getUserId();
    const url = this.BaseService.getArticleApiUrl() + `/${id}/author/${user}`;

    return this.http.get(url, {headers});
  }

  async getArticleRating(id: string) {
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const url = this.BaseService.getArticleApiUrl() + `/${id}/ratingValue`;

    return this.http.get(url, {headers});
  }

  async getUserRating(id: string) {
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const user = await this.authService.getUserId();
    const url = this.BaseService.getArticleApiUrl() + `/${id}/id/${user}/userId`;

    return this.http.get(url, {headers});
  }

  async createRating() {
   return 0;
  }

  async changeRating() {
    return 0;
  }

  async changePrivacyStatus() {

  }

  async updateArticle() {

  }

  async deleteArticle() {

  }

  async getAllUserArticles() {
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const user = await this.authService.getUserId();
    const url = this.BaseService.getArticleApiUrl() + `/${user}/user/all`;

    return this.http.get(url, {headers});
  }

  async createArticle(title: string, category: string, description: string, content: string, status: string): Promise<Observable<any>>{
    const headers: HttpHeaders = this.BaseService.getHeaders(true);
    const url = this.BaseService.getArticleApiUrl() + `/article`;

    const article = {
      title,
      category,
      description,
      content,
      status
    };

    return this.http.post(url, article, {headers});
    }
}
