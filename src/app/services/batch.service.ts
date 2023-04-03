import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';
@Injectable({
  providedIn: 'root',
})
export class BatchService {
  constructor(private http: HttpClient) {}
  public createbatch(batches: any) {
    return this.http.post(`${baseurl}/batch/`, batches);
  }

  public getAllbatches() {
    return this.http.get(`${baseurl}/batch/`);
  }

  public getbatch(id: any) {
    return this.http.get(`${baseurl}/batch/${id}`);
  }

  public updatebatch(data: any, id: any) {
    return this.http.patch(`${baseurl}/batch/${id}`, data);
  }

  public getStudentsOfbatch(id: any) {
    return this.http.get(`${baseurl}/student/${id}`);
  }
  public deletebatch(id: any) {
    return this.http.delete(`${baseurl}/batch/${id}`);
  }
}
