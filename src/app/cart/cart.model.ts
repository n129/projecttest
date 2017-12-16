import { Item } from '../store/item.model';
export class Cart {
    
    item:Item;
    quantity:number;

    constructor(item:Item){
        this.item = item;
        this.quantity = 1;
    }

    public addItem(){
        this.quantity++;
    }

    public removeItem(item:Item){
        this.quantity--;
    }
}