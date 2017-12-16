import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../login/user.service';
import { User } from '../login/user.model';

@Component({
  //for future - to ventrue to other sites
  moduleId:module.id.toString(),
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  user:User;
  users:User[];
  constructor(private userService:UserService) { }

  //this user - do this for this user - build constructor to apply for service
  ngOnInit() {
    this.user = new User();
  }

  onSubmit(){
    //from Spring
    this.userService.signup(this.user).subscribe(data => data);
  }

  onFind(){
    this.userService.findUserdetails().subscribe(data => {
      this.users = data;
    })
  }

  login() {
    this.userService.login(this.user).subscribe(data => {
      this.user = data;
    })
  }
}
