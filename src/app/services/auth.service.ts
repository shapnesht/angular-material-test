import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import baseurl from './helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }
  constructor(private http: HttpClient, private cookie: CookieService) { }

  public registerForAdmin(data: any) {
    return this.http.post(`${baseurl}/auth/registerAdmin`, data, this.config);
  }
  public login(data: any) {
    return this.http.post(`${baseurl}/auth/login`, data, this.config);
  }
  public logout() {
    return this.http.delete(`${baseurl}/auth/logout`, this.config);
  }
  public forgotPassword(data: any) {
    return this.http.post(`${baseurl}/auth/forgot-Password`, data, this.config);
  }
  public resetPassword(data: any) {
    return this.http.post(`${baseurl}/auth/reset-Password`, data, this.config);
  }
  public getCurrentUser() {
    return this.http.get(`${baseurl}/user/showMe`, this.config);
  }
  public getUser(id: any) {
    return this.http.get(`${baseurl}/user/${id}`, this.config);
  }
  public updateUser(data: any) {
    return this.http.patch(`${baseurl}/user/updateUser`, data, this.config);
  }
  public isLoggedIn() {
    console.log(this.cookie.getAll());
  }
}
