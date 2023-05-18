import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { AuthState } from 'src/app/store/auth.state';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store:Store){}

  get isAuth(){
    return this.store.selectSnapshot(AuthState.getIsAuth);
  }

}
