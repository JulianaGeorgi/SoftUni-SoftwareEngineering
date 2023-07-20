import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Database, ref, onValue } from '@angular/fire/database';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(private database: Database, private httpClient: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  setUserData(email: string, username: string, localId: string): void {

    this.user = {
      email: email,
      username: email,
      userId: localId,
    }
    
    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  getUserData(): string | null {
    return localStorage.getItem(this.USER_KEY);
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}