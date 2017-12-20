import { Component, OnInit } from '@angular/core';
import { User } from '../login/user.model';
import { UserService } from '../login/user.service';
import { Plan } from '../store/plan.model';
import { PlanService } from '../store/plan.service';
import { OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-plan-page',
  templateUrl: './plan-page.component.html',
})
export class PlanPageComponent implements OnInit, OnDestroy {
  plan:Plan;
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private planService:PlanService, public userService:UserService) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'] - 1000; // (+) converts string 'id' to a number
      this.plan = this.planService.plans[this.id];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
    
}