import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class StudentandteacherService {

  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }

  constructor(private http: HttpClient) { }

  public getAllStudents() {
    return this.http.get(`${baseurl}/student`, this.config)
  }
  public getAllSubjectsOfStudent() {
    return this.http.get(`${baseurl}/student/subjects`, this.config)
  }
  public updateStudentsOfBatch(data: any, id: any) {
    return this.http.patch(`${baseurl}/batch/student/${id}`, data, this.config)
  }

  public getBatchesOfTeachers() {
    return this.http.get(`${baseurl}/teacher/batches`, this.config)
  }

}
