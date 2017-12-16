import { Injectable,Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient, HttpParams } from '@angular/common/http';
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
            return e;
    });
    }

    savePlan(plan:Plan) : Observable<any>{
        return this.httpClient.post('http://localhost:8080/savePlan', plan);
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