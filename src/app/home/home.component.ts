import { Observable } from 'rxjs/Observable';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service';
import { Plan } from '../store/plan.model';
import { PlanService } from '../store/plan.service';

@Component({
  moduleId:module.id.toString(),
  templateUrl: './home.component.html'
})

export class HomeComponent{
 private item:Item;
 private items:Item[];
 private plan:Plan;
 private plans:Plan[];

  constructor(private httpClient:HttpClient, private userService:UserService) {
    this.items = [];
    this.plans = [];
   }

   findUserdetails() : Observable<User[]>{
    //calls the listener 
    return this.httpClient.get<User[]>('http://localhost:8080/findUserDetails')
    }

    addItem(){
      this.items.push(new Item(this.item.id, this.item.name, this.item.description, this.item.price, this.item.ownerUsername,
      this.item.listDate, this.item.status, this.item.isTool, this.item.soldTo, this.item.soldToDate, this.item.rentStartDate,
      this.item.rentReturnDate, this.item.rentTo, this.item.img01, this.item.img01Descript, this.item.img02, 
      this.item.img02Descript, this.item.img03, this.item.img03Descript));
    }

    addPlan(){
      this.plans.push(new Plan());
    }

   removeItem(item:Item){
     let index = this.items.findIndex ( a => {
      return a.id === item.id;})
      this.items.splice(index,1);
   }

   removePlan(plan:Plan){
     let index = this.plans.findIndex ( a => {
       return a.id === plan.id})
       this.plans.splice(index,1);
   }

}