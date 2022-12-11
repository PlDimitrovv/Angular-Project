import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseListComponent } from './browse-list/browse-list.component';
import { ArtModule } from '../art/art.module';


@NgModule({
  declarations: [BrowseListComponent],
  imports: [
    CommonModule,
    ArtModule
  ],
  exports: [BrowseListComponent]
})
export class BrowsePageModule { 

}
