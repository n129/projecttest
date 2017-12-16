import { Component, OnInit } from '@angular/core';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service';
import { CartService } from '../cart/cart.service'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(public cartService:CartService) { }

  ngOnInit() {
  }

}
