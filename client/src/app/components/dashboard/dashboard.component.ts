import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FinanceService } from 'src/app/services/finance.service';
import { AuthState } from 'src/app/store/auth.state';
import { FinanceInterface } from 'src/app/services/finance.interface'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store, private financeService: FinanceService){}

  monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь","Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

  get isAuth(){
    return this.store.selectSnapshot(AuthState.getIsAuth)
  }
  
  get userId(){
    return this.store.selectSnapshot(AuthState.getAuthUserId)
  }
  
  get userObj(){
    return this.store.selectSnapshot(AuthState.getAuthObject)
  }

  get month(){
    return this.monthNames[new Date().getMonth()] 
  }

  get sumFin(){
    let sum:number = 0;
    this.financeUser.map(e=>{sum += Number(e.value)})
    return sum;
  }

  financeUser:FinanceInterface[] = []
  idUser:number
  ngOnInit(): void {
    if(this.isAuth){
      if(this.userId != null){
        this.idUser = this.userId
        this.getAllFinance();
      }
    }
  }

  getAllFinance(){
    if(this.userId != null){
      this.financeService.getUserFinance(this.userId).subscribe({
        next:(data:any)=>{
          this.financeUser = data
        }
      })
    }

  }

  addBody = {
    "id_user":0,
    "value":"",
    "text":"",
    "date_create": new Date().toISOString().split('T')[0],
  }
  message:string = '';

  addFin(){
    if(this.userId != null){
      this.addBody.id_user = this.userId;
    }
    if(Number(this.addBody.value)){
      return this.financeService.addFinance(this.addBody).subscribe({
        next:()=>{
          this.getAllFinance();
          this.addBody.text = '';
          this.addBody.value = '';
          this.message = '';
        },
        error:(err:HttpErrorResponse)=>{console.log(err)}
      })
    }
    return this.message = 'Сумма должна быть числом';
  }
  
  deleteFin(id:number){
    return this.financeService.deleteFinance(id).subscribe({
      next:()=>{this.getAllFinance();}
    })
  }

  edit = false;
  
  editBody = {
    "id":0,
    "id_user":0,
    "value":"",
    "text":"",
    "date_create": new Date().toISOString().split('T')[0],
  }

  editObj(id:number){
    this.edit = !this.edit;
    if(this.userId != null){
      this.editBody.id_user = this.userId;
    }
    for(let f of this.financeUser){
      if(f.id === id){
        this.editBody.id = id;
        this.editBody.value = f.value;
        this.editBody.text = f.text;
        break;
      }
    }

    
  }
  saveEdit(){
    this.financeService.updateFinance(this.editBody).subscribe({
      next:()=>{this.getAllFinance()}
    })
    console.log(this.editBody)
  }
}
