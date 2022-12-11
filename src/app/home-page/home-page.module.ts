import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { NgxStarsModule } from 'ngx-stars';
import { MatGridListModule } from '@angular/material/grid-list';






@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule,
    MatIconModule,
    NgxStarsModule,
    MatGridListModule,
    NgxStarsModule
  ],
  exports:[
    HomeListComponent
  ]
})
export class HomePageModule { }
