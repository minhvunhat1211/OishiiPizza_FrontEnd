import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../Services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { LangService } from '../Services/lang.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });
  
  constructor(
    private formBuilDer: FormBuilder,
    private loginService: LoginServiceService,
    private cookieService: CookieService,
    private router: Router,
    private langService: LangService

  ) {

  }
  ngOnInit(): void {

  }
  public onSubmit(): void {
    this.loginService.login(this.formLogin.value).subscribe(res => {
      if (res.isSuccessed !== true) {
        console.log(res.isSuccessed);
        alert("Sai roi");
      }
      else {
        // let role = this.loginService.getRolev2(res.data.accessToken);
        // if (role !== "ADMIN") {
        //   alert("Ban khong phai admin");
        //   this.router.navigate(['']);
        // }
        // else
        // {
        //   localStorage.setItem('Token', res.data.accessToken);
        //   this.router.navigate(['/Home']);
        //   console.log("Token_1", res.data.accessToken);
        // }
        localStorage.setItem('Token', res.data.accessToken);
        this.router.navigate(['/Home']);
        console.log("Token_1", res.data.accessToken);
      }

    })
  }
  get email() {
    return this.formLogin.get('email');
  }
  get password() {
    return this.formLogin.get('password');
  }
}
