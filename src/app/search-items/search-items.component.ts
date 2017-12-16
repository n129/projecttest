import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ItemService } from '../store/item.service';
import { Item } from '../store/item.model';

@Component({
  selector: 'app-search-items',
  templateUrl: './search-items.component.html',
})

export class SearchItemsComponent{
  item:Item;
  data:Item[];
  
  constructor(private httpClient:HttpClient, private itemService:ItemService) { }

  // findItems(){
  //   this.itemService.findItems(
  //   //  search, sortBy, rangeFrom, rangeTo
  //   ).subscribe(data => {
  //     this.items = data;
  //     console.log(Item);
  //   })
  // }

  saveItem(item:Item){
    this.itemService.saveItem(this.item).subscribe(data => data);
  }

  findItems() {
    this.itemService.findItems().subscribe(data => {
        this.data = data;
  })
}
}
