import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlanService } from '../store/plan.service';
import { Plan } from '../store/plan.model';


@Component({
  selector: 'app-search-plans',
  templateUrl: './search-plans.component.html',
})

export class SearchPlansComponent {
  plan:Plan;
  plans:Plan[];
  constructor(private planService:PlanService) { }

  findPlans(){
    this.planService.findPlans().subscribe(data => {
      this.plans = data;
      console.log(Plan);
    })
  }

  savePlan(plan:Plan){
    this.planService.savePlan(this.plan).subscribe(data => data);
  }
}
