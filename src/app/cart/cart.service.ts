import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cart } from './cart.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Item } from '../store/item.model';
import { ItemService } from '../store/item.service'

@Injectable()
export class CartService{
    private items:Item[];

    constructor(private httpClient:HttpClient) {
        this.items = [];
    }

    addToCart(item:Item){
        this.items.push(item);
    }

    removeFromCart(item:Item){
        console.log(item);
        console.log(this.items);
        let index = this.items.findIndex ( a => {
        return a.id === item.id;})
        this.items.splice(index,1);        
    }

    getItems():Item[]{
        return this.items;
    }

}