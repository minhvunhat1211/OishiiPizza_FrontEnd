import { AddUserService } from './../Services/add-user.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  public formAddUser: FormGroup= new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    phoneNumber: new FormControl('')
  });
  constructor(private addUserService: AddUserService, private router: Router){

  }
  public addUSer(): void{
    this.addUserService.addUser(this.formAddUser.value).subscribe((res) =>{
      if (res.isSuccessed !== true) {
        console.log(res.isSuccessed);
        alert("loi");
      }
      else{
        alert("Thanh cong");
        this.router.navigate(['/Home']);
      }
    })
  }
}
