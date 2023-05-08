import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListUserService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {
  }
  public getListUser(pageSize?: number, pageIndex?: number): Observable<any>{
    console.log(pageSize);
    console.log(pageIndex);
    if (pageSize === 0) {
      pageSize = 10;
    }
    if (pageIndex === 0) {
      pageIndex = 1;
    }
    const url = `https://localhost:7299/api/v1/user/getall?pageSize=${pageSize}&pageIndex=${pageIndex}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public userDetail(id: any): Observable<any>{
    const url = `https://localhost:7299/api/v1/user/getbyid?id=${id}`;
    return this.httpClient.get<any>(url, this.httpOptions);
  }
  public editUser(id: any, data: any): Observable<any>{
    const url = `https://localhost:7299/api/v1/user/edit?id=${id}`;
    return this.httpClient.put<any>(url,data,this.httpOptions);
  }
}
