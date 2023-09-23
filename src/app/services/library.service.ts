import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseurl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  private config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true
  }

  constructor(private http: HttpClient) {}

  public createBook(data:any) {
    return this.http.post(`${baseurl}/library/createBook`, data, this.config)
  }

  public getAllBooks() {
    return this.http.get(`${baseurl}/library/getAllBooks`, this.config)
  }

  public getBook(id:any) {
    return this.http.get(`${baseurl}/library/${id}`, this.config)
  }
  public updateBook(id:any, data:any) {
    return this.http.patch(`${baseurl}/library/${id}`, data, this.config)
  }
  public deleteBook(id:any) {
    return this.http.delete(`${baseurl}/library/${id}`, this.config)
  }
}
