import { Component } from '@angular/core';
import { ListUserService } from '../Services/list-user.service';
import { Router } from '@angular/router';
import { LoginServiceService } from '../Services/login.service';

@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent {
  public listUsers: any;
  public pageCount: any;
  public checkAdmin: any;
  constructor(private listUserSevice: ListUserService, private route: Router, private loginService: LoginServiceService) {
    
  }
  public ngOnInit(): void {
    this.checkAdmin = this.loginService.checkAdmin();
    this.listUserSevice.getListUser(0,0).subscribe((res) => {
      console.log(res.data.items);
      this.listUsers = res.data.items;
      this.pageCount = res.pageCount;
    })
  }
  //onclick o day
  public goToDetail(id:number){
    console.log(id);
    this.route.navigate([`/UserDetail/${id}`])
  }
}
