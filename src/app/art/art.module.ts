import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtFormComponent } from './art-form/art-form.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { ArtCardComponent } from './art-card/art-card.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { NgxStarsModule } from 'ngx-stars';


@NgModule({
  declarations: [
    ArtFormComponent,
    ArtCardComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatExpansionModule,
    NgxStarsModule,  
  ],
  exports:[
    ArtFormComponent,
    ArtCardComponent
  ]
})
export class ArtModule { }
