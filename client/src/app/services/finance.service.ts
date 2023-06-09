import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/server';
import { FinanceInterface } from './finance.interface';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http:HttpClient) { }


  getUserFinance(id:number|null, year:number){
    return this.http.get<FinanceInterface>(`${Config.url}${Config.api}/finance/${id}/year/${year}`)
  }
  
  getUserFinanceToMonth(id:number|null, month:number){
    return this.http.get<FinanceInterface>(`${Config.url}${Config.api}/finance/${id}/month/${month}`)
  }


  addFinance(body:object){
    return this.http.post(`${Config.url}${Config.api}/finance/`,body)
  }

  deleteFinance(id:number){
    return this.http.delete(`${Config.url}${Config.api}/finance/${id}`)
  }

  updateFinance(body:object){
    return this.http.put(`${Config.url}${Config.api}/finance`,body)
  }

}
