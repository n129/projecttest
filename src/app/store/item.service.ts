import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Item } from './item.model';

@Injectable()
export class ItemService{
    item:Item;
    items:Item[];

    constructor(private httpClient:HttpClient) {
    }

    // findItems(search:string, sortBy:string, rangeFrom:string, rangeTo:string) : Observable<Item[]>{

    //    let param:HttpParams = new HttpParams()
    //     .set("search",search)
    //     .set("sortBy",sortBy)
    //     .set("rangeFrom",rangeFrom)
    //     .set("rangeTo",rangeTo);

    //     return this.httpClient.get<Item[]>('http://localhost:8080/findItems').map(e =>{
    //         this.items = e;
    //         return e;
    // });
    // }

    findItems(
        //search:string, sortBy:string, rangeFrom:string, rangeTo:string
    ) : Observable<Item[]>{
        //calls the listener 

        // let param:HttpParams = new HttpParams()
        // .set("search",search)
        // .set("sortBy",sortBy)
        // .set("rangeFrom",rangeFrom)
        // .set("rangeTo",rangeTo);

        return this.httpClient.get<Item[]>('http://localhost:8080/findItems').map(e =>{
            this.items = e;
            e.forEach(f =>{
                f.img01 = "data:image/jpg;base64,"+f.showImg01;
                f.img02 = "data:image/jpg;base64,"+f.showImg02;
                f.img03 = "data:image/jpg;base64,"+f.showImg03;
            })
            return e;
            
        });       
    }

    saveItem(item:Item) : Observable<any>{
        return this.httpClient.post('http://localhost:8080/saveItem', item);
    }
    

    // GetItemsByName() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByName', {params});
    // }

    // GetItemsByLowestPrice() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByLowestPrice', {params})
    // }

    // GetItemsByHighestPrice() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByHighestPrice', {params})
    // }

    // GetItemsByOwnerId() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByOwnerId', {params})
    // }

    // GetItemsByUploadDate() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByUploadDate', {params})
    // }

    // GetItemsByUploadDateLatest() : Observable<Item[]>{
    //     let params:HttpParams = new HttpParams().set("search-items", name);
    //     return this.httpClient.get<Item[]>('http://localhost:8080/getItemsByUploadDateLatest', {params})
    // }

    uploadItem(item:Item){
        return this.httpClient.post('http://localhost:8080/saveItem', item);
    }

}