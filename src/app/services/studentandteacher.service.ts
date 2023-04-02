import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentandteacherService {

  constructor(private http:HttpClient) { }

  public getAllStudents () {
    return this.http.get(`${baseurl}/student`)
  }
  public getAllSubjectsOfStudent () {
    return this.http.get(`${baseurl}/student/subjects`)
  }
  public updateStudentsOfBatch (data:any, id:any) {
    return this.http.patch(`${baseurl}/batch/student/${id}`,data)
  }


}
