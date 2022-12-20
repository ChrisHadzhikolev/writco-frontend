import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  getHeaders(includeToken?: boolean): HttpHeaders {
    if (includeToken) {
      const t = localStorage.getItem('token');
      if (!t) {
        throw new Error('Unauthenticated, please user again!');
      }
      return new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
        Authorization: `Bearer ${t}`
      });
    }

    return new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    });
  }

  getUsersApiUrl(): string {
    return 'http://localhost:3001';
  }
  getArticleApiUrl(): string {
    return 'http://localhost:3004';
  }
  getMessagingApiUrl(): string {
    return 'http://localhost:3003';
  }
  getRatingApiUrl(): string {
    return 'http://localhost:3000';
  }
}
