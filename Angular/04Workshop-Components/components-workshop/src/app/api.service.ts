import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Theme } from './types/theme';
import { Post } from './types/post';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getThemes() {
    const {appUrl} = environment;
    return this.http.get<Theme[]>(`${appUrl}/themes`); // return this.http.get(environment.appUrl);
  }

  getPosts(limit?: number) {
    const {appUrl} = environment;
    return this.http.get<Post[]>(`${appUrl}/posts${limit ? `?limit=${limit}` : ""}`);
  }
}
