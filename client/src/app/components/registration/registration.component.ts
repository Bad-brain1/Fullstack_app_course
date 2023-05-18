import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(
    private UserService: UserService,
    private store: Store
  ) { }

  errMessage: string = '';
  message: string = '';

  UserData = {
    "email": '',
    "password": '',
    "password_two": '',
    "name_first": '',
    "name_last": ''
  }

  register() {
    if (this.UserData.password != this.UserData.password_two) {
      return this.message = 'Пароли не совпадают';
    }
    let body = {
      "email": this.UserData.email,
      "password": this.UserData.password,
      "name_first": this.UserData.name_first,
      "name_last": this.UserData.name_last
    }
    return this.UserService.register(body).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (err: HttpErrorResponse) => { this.errMessage = err.status + ' Произошла ошибка' },
      complete:()=>{
        this.UserService.login({
          "email": body.email,
          "password": body.password
        })
      }
    })
  }
}
