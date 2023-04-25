import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../Services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public formLogin: FormGroup= new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
});
  constructor (private formBuilDer: FormBuilder, private loginService: LoginServiceService,private cookieService: CookieService, private router: Router) {}
   ngOnInit(): void {
   
   }
  public onSubmit(): void{
    this.loginService.login(this.formLogin.value).subscribe(res =>{
      if (res.isSuccessed !== true) {
        console.log(res.isSuccessed);
        alert("Sai roi");
      }
      else{
        //this.loginService.hasLogin(true);
        // this.cookieService.set("Token", res.data.accessToken);
        localStorage.setItem('Token', res.data.accessToken);
        this.router.navigate(['/Home']);
        console.log("Token_1", res.data.accessToken);
      }
      
    })
  }
}
