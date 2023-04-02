import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

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
}
