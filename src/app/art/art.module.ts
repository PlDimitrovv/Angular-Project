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


@NgModule({
  declarations: [
    ArtFormComponent
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
    ReactiveFormsModule
    
  ],
  exports:[
    ArtFormComponent
  ]
})
export class ArtModule { }
