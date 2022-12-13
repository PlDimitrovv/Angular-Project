import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeListComponent } from './home-page/home-list/home-list.component';
import { ProfileComponent } from './profile/artProfile/profile.component';
import { BrowseListComponent } from './browse-page/browse-list/browse-list.component';
import { AuthGuard } from './shared/guard';
import { ArtEditComponent } from './art/art-edit/art-edit.component';
import { ArtSubmitComponent } from './art/art-submit/art-submit.component';

const routes: Routes = [
  {
    path: '',
    component: HomeListComponent
  },
  {
    path: 'home',
    component: HomeListComponent
  },
  {
    path: 'browse',
    component: BrowseListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create',
    component: ArtSubmitComponent,
    canActivate: [AuthGuard]
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
  {
    path: 'userProfile',
    component: ProfileComponent,
    canActivate: [AuthGuard]

  },
  {
    path: 'editArt/:id',
    component: ArtEditComponent,
    canActivate: [AuthGuard]

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
