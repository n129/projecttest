import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Plan } from './plan.model';

@Injectable()
export class PlanService{
    plan:Plan;
    plans:Plan[];

    constructor(private httpClient:HttpClient) {
    }

    findPlans() : Observable<Plan[]>{
        return this.httpClient.get<Plan[]>('http://localhost:8080/findPlans').map(e =>{
            this.plans = e;
            e.forEach(f =>{
                f.img01 = "data:image/jpg;base64,"+f.showImg01;
                f.img02 = "data:image/jpg;base64,"+f.showImg02;
                f.img03 = "data:image/jpg;base64,"+f.showImg03;
            })
            return e;
    });
    }

     savePlan(plan:Plan, planPic:FormData){
         return this.httpClient.post('http://localhost:8080/savePlan', plan).subscribe(data => {
             if(planPic){
                 let header = new HttpHeaders()
                 header.append('Content-Type','application/x-www-form-urlencoded');
                 this.httpClient.post('http://localhost:8080/uploadPlanImage/'+ data ['planId'], planPic, {headers:header})
                 .subscribe();
             }
         })
     }
    GetPlansByName() : Observable<Plan[]>{
        let params:HttpParams = new HttpParams().set("search-plans", name);
        return this.httpClient.get<Plan[]>('http://localhost:8080/getPlansByName', {params});
    }

    GetPlansByOwnerId() : Observable<Plan[]>{
        let params:HttpParams = new HttpParams().set("search-plans", name);
        return this.httpClient.get<Plan[]>('http://localhost:8080/getPlansByOwnerId', {params})
    }

    GetPlansByUploadDate() : Observable<Plan[]>{
        let params:HttpParams = new HttpParams().set("search-plans", name);
        return this.httpClient.get<Plan[]>('http://localhost:8080/getPlansByUploadDate', {params})
    }

    GetPlansByUploadDateLatest() : Observable<Plan[]>{
        let params:HttpParams = new HttpParams().set("search-plans", name);
        return this.httpClient.get<Plan[]>('http://localhost:8080/getPlansByUploadDateLatest', {params})
    }

}