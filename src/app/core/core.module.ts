import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../app-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NotfoundComponent } from './notfound/notfound.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    AppRoutingModule,
    MatSidenavModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
