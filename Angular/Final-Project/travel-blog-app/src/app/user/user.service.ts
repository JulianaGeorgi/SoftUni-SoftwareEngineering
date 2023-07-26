import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { Database } from '@angular/fire/database';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  user: User | undefined;
  user$!: Observable<any>;

  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private database: Database,
    private httpClient: HttpClient
  ) {
    // EXECUTED FIRST 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
      console.log(this.user)
    } catch (error) {
      this.user = undefined;
    }
  }

  register(email: string | null | undefined, password: string | null | undefined) {
    return this.httpClient
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseApiKey}`,
        { email, password, returnSecureToken: true }
      )
  }

  login(email: string, password: string) {
    return this.httpClient
      .post<User>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseApiKey}`,
        { email, password, returnSecureToken: true })
  }

  setUserData(email: string, username: string, localId: string): void {

    this.user = {
      email: email,
      username: email,
      userId: localId,
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  getUserData(): User | undefined {
    const userJson = localStorage.getItem(this.USER_KEY);
    if (userJson === null) {
      this.user = undefined;
    } else {
      this.user = JSON.parse(userJson);
    }
    return this.user;
  }

  isOwner(authorId: string | null): boolean {
    if (this.user?.userId === authorId) {
      return true;
    }
    return false;
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}