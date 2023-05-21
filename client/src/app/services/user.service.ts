import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/server';
import { Store } from '@ngxs/store';
import { UserAuthInterface } from './User.interface';
import { AuthUpdate } from '../store/model/auth.model';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { AuthState } from '../store/auth.state';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store, private router: Router,private cookieService:CookieService) { }


  register(body: object) {
    return this.http.post(`${Config.url}${Config.api}/auth/register`, body);
  }

  login(body: object) {
    return this.http.post<UserAuthInterface>(`${Config.url}${Config.api}/auth/login`, body).subscribe({
      next:(data:UserAuthInterface)=>{
        this.AuthStoreUpdate(data);
        this.saveUserCookie();
        this.router.navigateByUrl('/');
      }
    })
  }

  AuthStoreUpdate(data: UserAuthInterface) {
    return this.store.dispatch(
      new AuthUpdate({
        id: data.id,
        email: data.email,
        userFirstName: data.name_first,
        userSecondName: data.name_last,
        token: data.token,
        isAuth: true,
    }))
  }

  saveUserCookie(){
    let user = this.store.selectSnapshot(AuthState.getAuthObject)
    this.cookieService.set('id',`${user.id}`);
    this.cookieService.set('email',`${user.email}`);
    this.cookieService.set('FN',`${user.userFirstName}`);
    this.cookieService.set('SN',`${user.userSecondName}`);
    this.cookieService.set('T',`${user.token}`);
  }
  // TODO: сохранить пользователя в куки или локалстор

}
