import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module"
import { HomePageModule } from './home-page/home-page.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ArtModule } from './art/art.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptors';
import { AuthInterceptor } from './auth/auth.interceptor';
import { ProfileModule } from './profile/profile.module';
import { BrowsePageModule } from './browse-page/browse-page.module';
import { ArtEditComponent } from './art/art-edit/art-edit.component';
import { ArtSubmitComponent } from './art/art-submit/art-submit.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    ArtEditComponent,
    ArtSubmitComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AuthModule,
    HomePageModule,
    RouterModule,
    HttpClientModule,
    ArtModule,
    ProfileModule,
    BrowsePageModule,
    ToastNoAnimationModule.forRoot()
  ],
  providers: [
    appInterceptorProvider,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
