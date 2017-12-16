import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Item } from '../store/item.model';
import { CartService } from '../cart/cart.service';
import { Router } from '@angular/router'
import { Cart } from './cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent {

  item:Item;
  items:Item[];

  constructor(private httpClient:HttpClient, public cartService:CartService) {
  }

  buildItems():Cart[]{
    let carts:Cart[] = []; 
    this.cartService.getItems().forEach(e =>{
      let index = carts.findIndex(i =>{
       return  i.item.id == e.id;
      })
      
      if(index == -1){
        carts.push(new Cart(e))
      }else{
        carts[index].addItem();
      }
     
    });
    return carts;
  }

  getTotalPrice():number{
    let total = 0;
    this.cartService.getItems().forEach(e =>{
      total += e.price;
  });
  return total;
}

removeFromCart(item:Item){
  console.log("cart component")
  console.log(item)
  this.cartService.removeFromCart(item);
}
}


