import { Plan } from './../store/plan.model';
import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PlanService } from '../store/plan.service';

@Component({
  selector: 'app-search-plans',
  templateUrl: './search-plans.component.html',
})

export class SearchPlansComponent implements OnInit {
  plan:Plan;
  data:Plan[];


  constructor(private planService:PlanService) { }

  

  savePlan(plan:Plan){
    //this.planService.savePlan(this.plan).subscribe(data => data);
  }

  ngOnInit() {
    this.planService.findPlans().subscribe(data => {
        this.data = data;
  })
}
}
