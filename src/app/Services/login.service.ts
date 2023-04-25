import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
 
  private REST_API_SERVER = "https://localhost:7299/api/v1/user/login";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private router: Router) { }
  ngOnInit(): void {

  }
  public login(data: any): Observable<any>{
    const url = this.REST_API_SERVER;
    return this.httpClient.post<any>(url,data,this.httpOptions);
  }
  public logout(): void{
    localStorage.removeItem('Token');
  }

}
