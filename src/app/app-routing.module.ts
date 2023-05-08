import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'Home', component: HomeComponent, canActivate : [AuthGuard]},
  { path: 'AddUser', component: AddUserComponent, canActivate :[AuthGuard]},
  { path: 'UserDetail/:id', component: UserDetailComponent, canActivate :[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
