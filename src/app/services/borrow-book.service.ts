import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class BorrowBookService {
  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }
  constructor(private http: HttpClient) {}
  public createBorrowBook(data:any) {
    return this.http.post(`${baseurl}/borrow/createBorrowBook`, data, this.config)
  }
  public getAllBorrowBook() {
    return this.http.get(`${baseurl}/borrow/getAllBorrowRecord`, this.config)
  }
  public getStudentBookHistory(data:any) {
    return this.http.post(`${baseurl}/borrow/getStudentBookHistory`, data, this.config)
  }
  public returnBook(id:any, data:any) {
    return this.http.patch(`${baseurl}/borrow/returnBorrowBook/${id}`,data, this.config)
  }
  public showNotReturnBooks() {
    return this.http.get(`${baseurl}/borrow/getUnreturnedBook`, this.config)
  }

}
