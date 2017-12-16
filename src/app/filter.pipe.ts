import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })

export class FilterPipe implements PipeTransform {
  public transform(value, keys: any, term: any) {
  
    if (!term) return value;
    return (value || []).filter((item) => 
      keys.split(',').some(key => 
        item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
  }
}