import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }
  constructor(private http: HttpClient) { }

  public registerForAdmin(data: any) {
    return this.http.post(`${baseurl}/auth/registerAdmin`, data, this.config);
  }
  public login(data: any) {
    return this.http.post(`${baseurl}/auth/login`, data, { withCredentials: true });
  }
  public loginUser(data: any) {
    localStorage.setItem("user", JSON.stringify(data))
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
    return localStorage.getItem("user") != null;
  }
  public getUserDetails() {
    let userData = localStorage.getItem("user");
    if (userData == undefined || userData == null || userData == '') {
      this.logout();
      return null;
    } else {
      return JSON.parse(userData);
    }
  }

  // get User Role
  public getUserRole() {
    let user = this.getUserDetails();
    if(user == null) return null;
    return user.role;
  }

}
