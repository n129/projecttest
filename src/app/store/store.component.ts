import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service';
import { CartService } from '../cart/cart.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
})
export class StoreComponent{

  constructor() { }

}
