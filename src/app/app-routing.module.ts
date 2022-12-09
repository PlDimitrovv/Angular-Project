import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtFormComponent } from './art/art-form/art-form.component';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
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
    component: ArtFormComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
