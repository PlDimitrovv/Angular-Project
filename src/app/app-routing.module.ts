import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeListComponent } from './home-page/home-list/home-list.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeListComponent
  },
  {
    path: 'browse',
    component: HomeListComponent
  },
  {
    path: 'create',
    component: HomeListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
