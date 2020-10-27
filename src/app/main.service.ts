
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { PolicyFormClass } from 'src/models/policy-form';



@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private http: HttpClient) { }

  postPolicy(policy: PolicyFormClass){
    return this.http.post('http://localhost:8090/initialCalculation', policy);
    
  }

}
