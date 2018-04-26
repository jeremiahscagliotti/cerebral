import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';
import { Router } from '@angular/router';
import { UserSessionDetails } from "../interface/user-session-details";
import {TokenPayload} from "../interface/token-payload";

@Injectable()
export class AuthenticationService {

  private token: string;

  constructor(private http: HttpClient, private router: Router) { }

  private saveToken(token: string) : void
  {
    localStorage.setItem('auth-token', token);
    this.token = token;
  }

  private getToken() : string
  {
    if(!this.token) {
      this.token = localStorage.getItem("auth-token");
    }

    return this.token;
  }

  public logout(): void
  {
    this.token = '';
    window.localStorage.removeItem("auth-token");
    this.router.navigateByUrl("/");
  }

  public getUserSessionDetails() : UserSessionDetails
  {
    const token = this.getToken();
    let payload;

    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean
  {
    const userSession = this.getUserSessionDetails();
    if (userSession) {
      return userSession.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this.http.post(`/api/${type}`, user);
    } else {
      base = this.http.get(`/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );

    return request;
  }

  public register(user: TokenPayload): Observable<any>
  {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any>
  {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any>
  {
    return this.request('get', 'profile');
  }
}
