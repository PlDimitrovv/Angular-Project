import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './artProfile/profile.component';
import { ArtModule } from '../art/art.module';


@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ArtModule
  ],
  exports: [ProfileComponent]
})
export class ProfileModule { }
