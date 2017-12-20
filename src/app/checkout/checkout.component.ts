import { Component, OnInit } from '@angular/core';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service';
import { CartService } from '../cart/cart.service';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService:CartService, private userService:UserService) { }

  ngOnInit() {
  }

}
