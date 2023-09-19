import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
@Injectable({
  providedIn: 'root',
})
export class BatchService {
  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }

  constructor(private http: HttpClient) {}
  public createbatch(batches: any) {
    return this.http.post(`${baseurl}/batch/`, batches, this.config);
  }

  public getAllbatches() {
    return this.http.get(`${baseurl}/batch/`, this.config);
  }

  public getbatch(id: any) {
    return this.http.get(`${baseurl}/batch/${id}`, this.config);
  }

  public updatebatch(data: any, id: any) {
    return this.http.patch(`${baseurl}/batch/${id}`, data, this.config);
  }

  public getStudentsOfbatch(id: any) {
    return this.http.get(`${baseurl}/student/${id}`, this.config);
  }
  public deletebatch(id: any) {
    return this.http.delete(`${baseurl}/batch/${id}`, this.config);
  }
}
