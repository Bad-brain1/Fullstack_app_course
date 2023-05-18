import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { RegistrationComponent } from './components/registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    title:'Главная'
  },
  {
    path:'login',
    component:AuthComponent,
    title:'Вход'
  },
  {
    path:'register',
    component:RegistrationComponent,
    title:'Регистрация'
  },
  {
    path: '**',
    redirectTo:''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
