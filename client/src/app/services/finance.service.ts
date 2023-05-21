import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/server';
import { FinanceInterface } from './finance.interface';

@Injectable({
  providedIn: 'root'
})
export class FinanceService {

  constructor(private http:HttpClient) { }


  getUserFinance(id:number|null){
    return this.http.get<FinanceInterface>(`${Config.url}${Config.api}/finance/${id}`)
  }

}
