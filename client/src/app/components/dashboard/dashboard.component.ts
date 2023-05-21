import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FinanceService } from 'src/app/services/finance.service';
import { AuthState } from 'src/app/store/auth.state';
import { FinanceInterface } from 'src/app/services/finance.interface'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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

  financeUser:FinanceInterface[] = []

  ngOnInit(): void {
    if(this.isAuth){
      this.getAllFinance(2);
    }
  }

  getAllFinance(id:number){
    this.financeService.getUserFinance(id).subscribe({
      next:(data:FinanceInterface)=>{
        this.financeUser.push(data)
        console.log( this.financeUser)
      }
    })
  }
}
