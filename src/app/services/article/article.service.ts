import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
// @ts-ignore
import { reject } from 'lodash'
import {MainService} from "../main/main.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService{
  constructor(
    private router: Router,
    private http: HttpClient,
    private BaseService: MainService,) {}

  async getAllPublicArticles() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async getArticleById() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async getArticleRating() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async getUserRating() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async createRating() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async changeRating() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async changePrivacyStatus() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async updateArticle() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async deleteArticle() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
  }

  async getAllUserArticles() {
    return new Promise((resolve) => {
      const token = localStorage.getItem('token');
      if (!token) {
        reject('Unauthenticated, please user again!');
      }

      if (typeof token === "string") {
        const decoded: any = jwt_decode(token);
        resolve(decoded.user.id);
      }
    });
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
