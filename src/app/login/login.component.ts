import { Component, OnInit } from '@angular/core';
import { UserService } from '../login/user.service';
import { User } from '../login/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:User;
  users:User[];
  constructor(private userService:UserService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(){
    //from Spring
    this.userService.login(this.user).subscribe(data => data);
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
