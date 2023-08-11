import { Injectable } from '@angular/core';
import { User } from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})

export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  get isLogged(): boolean {
    return !!this.user;
  }

  constructor(
    private httpClient: HttpClient
  ) 
  
  {
    // *EXECUTED FIRST - WITH THE INSTANTIATION OF THE USERSERVICE CLASS 
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  register(email: string | null | undefined, password: string | null | undefined) {
    const apiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='
    return this.httpClient
      .post<User>(
        `${apiUrl + environment.firebaseApiKey}`,
        { email, password, returnSecureToken: true })
  }

  login(email: string, password: string) {
    const apiUrl = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='
    return this.httpClient
      .post<User>(
        `${apiUrl + environment.firebaseApiKey}`,
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
    return this.user?.userId === authorId;
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}