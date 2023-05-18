import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../config/server';
import { Store } from '@ngxs/store';
import { UserAuthInterface } from './User.interface';
import { AuthUpdate } from '../store/model/auth.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private store: Store) { }


  register(body: object) {
    return this.http.post(`${Config.url}${Config.api}/auth/register`, body);
  }

  login(body: object) {
    return this.http.post<UserAuthInterface>(`${Config.url}${Config.api}/auth/login`, body).subscribe({
      next:(data:UserAuthInterface)=>{
        this.AuthStoreUpdate(data)
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

  // TODO: сохранить пользователя в куки или локалстор

}
