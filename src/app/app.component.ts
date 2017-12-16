import { Component } from '@angular/core';
import { UserService } from './login/user.service';
import { ItemService } from './store/item.service';
import { PlanService } from './store/plan.service';
import { CartService } from './cart/cart.service';
import { FilterPipe } from './filter.pipe';
import { PlanFilterPipe } from './search-plans/file-plans.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {

  constructor(public userService:UserService){}
  
}
