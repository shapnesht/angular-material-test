import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';
import baseurl from './helper';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie:CookieService) { }

  public registerForAdmin(data: any) {
    return this.http.post(`${baseurl}/auth/registerAdmin`, data);
  }
  public login(data: any) {
    return this.http.post(`${baseurl}/auth/login`, data);
  }
  public logout() {
    return this.http.delete(`${baseurl}/auth/logout`);
  }
  public forgotPassword(data: any) {
    return this.http.post(`${baseurl}/auth/forgot-Password`, data);
  }
  public resetPassword(data: any) {
    return this.http.post(`${baseurl}/auth/reset-Password`, data);
  }
  public getCurrentUser() {
    return this.http.get(`${baseurl}/user/showMe`);
  }
  public getUser(id: any) {
    return this.http.get(`${baseurl}/user/${id}`);
  }
  public updateUser(data: any) {
    return this.http.patch(`${baseurl}/user/updateUser`, data);
  }
  public isLoggedIn() {
    console.log(this.cookie.getAll());
  }
}
