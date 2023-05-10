import { Component } from '@angular/core';
import { ListUserService } from '../Services/list-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginServiceService } from '../Services/login.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  public canDo: any;
  public userDetail: any;
  public formEditUser: FormGroup= new FormGroup({
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  public checkAdmin: any;
  constructor(private listUserSevice: ListUserService, private activatedRoute: ActivatedRoute, private route: Router, private loginService: LoginServiceService){

  }
  ngOnInit(): void{
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.route.events.subscribe(() => {
      
      this.checkAdmin = this.loginService.checkAdmin();
      if (this.checkAdmin !== true) {
        let user = this.loginService.decoded();
        if (user.Id === id) {
          this.canDo = true;
        }
        else {
          this.canDo = false;
        }
      }
      else {
        this.canDo = true;
      }
      console.log(this.canDo);
    });
    this.listUserSevice.userDetail(id).subscribe((res) => {
      this.userDetail = res.data;
      console.log(this.userDetail);
    })
  }
  public editUser(): void{
    // tao 1 bien cando va check theo role
    if (this.loginService.checkAdmin() !== true) {
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      let user = this.loginService.decoded();
      if (id !== user.Id) {
        alert("Ban khong co quyen doi thong tin nguoi khac");
      }
      else{
        this.listUserSevice.editUser(id, this.formEditUser.value).subscribe((res) => {
          if (res.isSuccessed !== true) {
            console.log(res.isSuccessed);
            alert("Loi");
          }
          else{
            alert("Thanh cong");
            this.route.navigate(['/Home']);
          }
          console.log(res);
        })
      }
    }
    else{
      let id = this.activatedRoute.snapshot.paramMap.get('id');
      this.listUserSevice.editUser(id, this.formEditUser.value).subscribe((res) => {
      if(res.isSuccessed !== true) {
          console.log(res.isSuccessed);
          alert("Loi");
        }
        else{
          alert("Thanh cong");
          this.route.navigate(['/Home']);
        }
       console.log(res);
      })
      console.log(this.formEditUser.value);
    }
    
  }
  
}
