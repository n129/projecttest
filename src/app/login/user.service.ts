import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class UserService{
    user:User;

    constructor(private httpClient:HttpClient) {
    }
    signup(user:User, profilePic:FormData){
        return this.httpClient.post('http://localhost:8080/signup', user).subscribe(data =>{
            if(profilePic){
                let header = new HttpHeaders()
                header.append('Content-Type','application/x-www-form-urlencoded');
                this.httpClient.post('http://localhost:8080/upload/'+data['userId'],profilePic, {headers:header})
                .subscribe();
            }
        })
    }
    //user[] - return type
    //observable - wait untill the data is ready - suscbribe - doesn't wait until that option is loaded - asynchornous
    findUserdetails() : Observable<User[]>{
        //calls the listener 
        return this.httpClient.get<User[]>('http://localhost:8080/findUserDetails').map(e=>{
            e.forEach(f=>{
                f.avatar = "data:image/jpg;base64," + f.showAvatar;
            })
            return e;
        })
    }
    submitUserDetails(user:User,profilePic:FormData){
        return this.httpClient.post('http://localhost:8080/submitUserDetails', user).subscribe(data => {
            if(profilePic){
                let header = new HttpHeaders()
                header.append('Content-Type','application/x-www-form-urlencoded');
                this.httpClient.post('http://localhost:8080/upload/'+data['userId'],profilePic, {headers:header})
                .subscribe();
            }
        })
    }
    deleteUserdetails() : Observable<User[]>{
        //calls the listener 
        return this.httpClient.get<User[]>('http://localhost:8080/deleteUserDetails')
    }
    login(user:User) : Observable<User>{
        return this.httpClient.post<User>('http://localhost:8080/login', user).map(u=>{
            this.user=u;
            this.user.avatar = "data:image/jpg;base64," + this.user.showAvatar;
            //console.log(u);
        return u;
        })
    }
}