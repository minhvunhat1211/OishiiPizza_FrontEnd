import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Observer } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  public username: any;
  public user: any;
  private REST_API_SERVER = "https://localhost:7299/api/v1/user/login";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private httpClient: HttpClient, private router: Router, private jwtHelper: JwtHelperService) { }
  ngOnInit(): void {

  }
  public login(data: any): Observable<any>{
    const url = this.REST_API_SERVER;
    return this.httpClient.post<any>(url,data,this.httpOptions);
  }
  public logout(): void{
    localStorage.removeItem('Token');
    this.router.navigate(['']);
  }
  public getRole(): string{
    let token = localStorage.getItem("Token");
    let decodedToken;
    if(token !== null)
    {
      decodedToken = this.jwtHelper.decodeToken(token)
    }
    console.log(decodedToken.Role);
    return decodedToken.Role;
  }

  public getRolev2(token: any): string{
    let decodedToken;
    if(token !== null)
    {
      decodedToken = this.jwtHelper.decodeToken(token)
    }
    console.log(decodedToken.Role);
    return decodedToken.Role;
  }
  public getUserName(): any{
    let token = localStorage.getItem("Token");
    let decodedToken;
    if(token !== null)
    {
      decodedToken = this.jwtHelper.decodeToken(token)
      this.username = decodedToken.Email;
    }
    else{
      this.username = '';
    }
    return this.username;
  }
}
