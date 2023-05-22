import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { CookieService } from 'ngx-cookie-service';
import { AuthState } from './store/auth.state';
import { AuthUpdate } from './store/model/auth.model';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private store: Store, private cookieService: CookieService, private router: Router) { }
// fix cookie
  ngOnInit(): void {
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd) {
        console.log(this.cookieService.check('T'))
        if(this.cookieService.check('T')){
          if (!this.store.selectSnapshot(AuthState.getIsAuth)) {
            this.updateStore();
          }
          return true;
        }
      }
      return true
    });
  }

  updateStore() {
    return this.store.dispatch(
      new AuthUpdate({
        id: Number(this.cookieService.get('id')),
        email: this.cookieService.get('email'),
        userFirstName: this.cookieService.get('FN'),
        userSecondName: this.cookieService.get('SN'),
        token: this.cookieService.get('T'),
        isAuth: true,
      }))
  }


}
