import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module"
import { HomePageModule } from './home-page/home-page.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { ArtModule } from './art/art.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { appInterceptorProvider } from './app.interceptors';


@NgModule({
  declarations: [
    AppComponent,
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
    ArtModule
  ],
  providers: [
    appInterceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
