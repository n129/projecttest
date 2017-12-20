import { Component,ViewChild } from '@angular/core';
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
  @ViewChild('fileInput') fileInput;

 
  //ADDED
  userReturn:String;
  constructor(private userService:UserService) { }

  //this user - do this for this user - build constructor to apply for service
  ngOnInit() {
    this.user = new User();
  }

  upload() {

    // let fileBrowser = this.fileInput.nativeElement;
    // if (fileBrowser.files && fileBrowser.files[0]) {
    //   const formData = new FormData();
    //   formData.append("image", fileBrowser.files[0]);
    //   this.profilePic = formData;
    // }
  }

  onSubmit(){
    //from Spring
    let fileBrowser = this.fileInput.nativeElement;
    const formData = new FormData();
    if (fileBrowser.files && fileBrowser.files[0]) {
      formData.append("image", fileBrowser.files[0]);
    }
    this.userService.signup(this.user,formData);
    //return userName then use this to submit photos
    //return this.userService.user.userName = this.userReturn;
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
