import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddUserService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private router: Router) { }
  public addUser(data: any): Observable<any>{
    const url = `https://localhost:7299/api/v1/user/create`;
    return this.httpClient.post<any>(url,data,this.httpOptions);
  }
}
