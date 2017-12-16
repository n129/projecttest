import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service';
import { CartService } from '../cart/cart.service';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
})
export class ItemPageComponent implements OnInit, OnDestroy {
  item:Item;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private itemService:ItemService, public userService:UserService,
     private cartService:CartService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] - 1000; // (+) converts string 'id' to a number
      this.item = this.itemService.items[this.id];
       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addToCart(){
    this.cartService.addToCart(this.item);
  }
    
}