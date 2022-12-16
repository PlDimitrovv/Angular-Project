import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeListComponent } from './home-list/home-list.component';
import { ArtModule } from '../art/art.module';






@NgModule({
  declarations: [
    HomeListComponent
  ],
  imports: [
    CommonModule,
    ArtModule
  ],
  exports:[
    HomeListComponent
  ]
})
export class HomePageModule { }
