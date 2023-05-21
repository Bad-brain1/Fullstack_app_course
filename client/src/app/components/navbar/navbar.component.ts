import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from 'src/app/store/auth.state';
import { StateClear } from 'ngxs-reset-plugin';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private store:Store, private cookie:CookieService, private router: Router,){}

  get isAuth(){
    return this.store.selectSnapshot(AuthState.getIsAuth);
  }


  logOut(){
    this.cookie.deleteAll()
    this.store.dispatch(new StateClear());
    setTimeout(() => {
      this.router.navigateByUrl('/');
    }, 500);

  }
}
