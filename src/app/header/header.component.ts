import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login.service';
import { Router } from '@angular/router';
import { LangService } from '../Services/lang.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public username: any;
  public lang: string[] = [
    'vi',
    'en',
  ]
  constructor(private loginService: LoginServiceService, private router: Router, private langService: LangService) {
    
  }
  public ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.username = this.loginService.getUserName();
    });
  }
  public logOut(): void{
    this.loginService.logout();
  }
  public setLang(lang: string){
    localStorage.setItem('lang', lang);
    this.langService.switchLang(lang);
  }
}