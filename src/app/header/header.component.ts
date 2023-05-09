import { Component } from '@angular/core';
import { LoginServiceService } from '../Services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public username: any;
  constructor(private loginService: LoginServiceService, private router: Router) {
    
  }
  public ngOnInit(): void {
    this.router.events.subscribe(() => {
      this.username = this.loginService.getUserName();
    });
  }
  public logOut(): void{
    this.loginService.logout();
  }
}
