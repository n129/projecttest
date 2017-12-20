import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../login/user.service';
import { User } from '../login/user.model';

@Component({
  //for future - to ventrue to other sites
  moduleId:module.id.toString(),
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  user:User;
  users:User[];
  @ViewChild('fileInput') fileInput;
  constructor(private httpClient:HttpClient, private userService:UserService) { }

  //this user - do this for this user - build constructor to apply for service
  ngOnInit() {
    this.userService.findUserdetails().subscribe(data => {
        this.users = data;
    })
  }

  // onSubmit(){
  //   //from Spring
  //   this.userService.signup(this.user).subscribe(data => data);
  // }

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

  submitUserDetails(){
    let fileBrowser = this.fileInput.nativeElement;
    const formData = new FormData();
    if (fileBrowser.files && fileBrowser.files[0]) {
      formData.append("image", fileBrowser.files[0]);
    }
    this.userService.submitUserDetails(this.user,formData);
    //this.userService.submitUserDetails(this.user).subscribe(data => data);
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
