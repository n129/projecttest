import { Plan } from '../store/plan.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'planfilter' })

export class PlanFilterPipe implements PipeTransform {
  public transform(value, keys: string, term: string) {
  
    if (!term) return value;
    return (value || []).filter((plan) => 
      keys.split(',').some(key => 
        plan.hasOwnProperty(key) && new RegExp(term, 'gi').test(plan[key])));
  }
}