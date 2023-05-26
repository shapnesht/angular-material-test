import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root',
})
export class AttendanceServiceService {

  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }

  constructor(private http: HttpClient) {}

  public createAttendance(attendances: any) {
    return this.http.post(`${baseurl}/attendance/`, attendances, this.config);
  }

  public getAllattendance() {
    return this.http.get(`${baseurl}/attendance/`, this.config);
  }

  public getAttendance(id: any) {
    return this.http.get(`${baseurl}/attendance/${id}`, this.config);
  }

  public getAttendanceByDateAndTime(data: any) {
    return this.http.post(
      `${baseurl}/attendance/getAttendanceByDateAndTime/`,
      data,
      this.config
    );
  }

  public getAttendanceByDate(data: any) {
    return this.http.post(`${baseurl}/attendance/getAttendanceByDate/`, data, this.config);
  }
  public updateAttendance(data: any, id: any) {
    return this.http.patch(`${baseurl}/attendance/${id}`, data, this.config);
  }

  public deleteAttendance(id: any) {
    return this.http.delete(`${baseurl}/attendance/${id}`, this.config);
  }
}
