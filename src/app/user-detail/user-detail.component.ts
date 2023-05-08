import { Component } from '@angular/core';
import { ListUserService } from '../Services/list-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  public userDetail: any;
  public formEditUser: FormGroup= new FormGroup({
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private listUserSevice: ListUserService, private activatedRoute: ActivatedRoute, private route: Router){

  }
  ngOnInit(): void{
    // lay id va subcribe api o day
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.listUserSevice.userDetail(id).subscribe((res) => {
      this.userDetail = res.data;
      console.log(this.userDetail);
    })
  }
  public editUser(): void{
    let id = this.activatedRoute.snapshot.paramMap.get('id');
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
    console.log(this.formEditUser.value);
  }
}
