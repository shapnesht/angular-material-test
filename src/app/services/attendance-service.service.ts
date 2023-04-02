import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AttendanceServiceService {
  constructor(private http: HttpClient) {}

  public createAttendance(attendances: any) {
    return this.http.post(`${baseurl}/attendance/`, attendances);
  }

  public getAllattendance() {
    return this.http.get(`${baseurl}/attendance/`);
  }

  public getAttendance(id: any) {
    return this.http.get(`${baseurl}/attendance/${id}`);
  }

  public getAttendanceByDateAndTime(data: any) {
    return this.http.get(
      `${baseurl}/attendance/getAttendanceByDateAndTime/`,
      data
    );
  }

  public getAttendanceByDate(data: any) {
    return this.http.get(`${baseurl}/attendance/getAttendanceByDate/`, data);
  }
  public updateAttendance(data: any, id: any) {
    return this.http.patch(`${baseurl}/attendance/${id}`, data);
  }

  public deleteAttendance(id: any) {
    return this.http.delete(`${baseurl}/attendance/${id}`);
  }
}
