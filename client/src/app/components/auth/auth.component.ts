import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
 
  constructor(private userService:UserService){}
  
  form = {
    'email':'',
    'password':''
  }
  
  sendForm(){
    this.userService.login(this.form)
  }
}
