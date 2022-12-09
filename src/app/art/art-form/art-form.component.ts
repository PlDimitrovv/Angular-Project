import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.scss']
})
export class ArtFormComponent {

 

  artSubmitFrom = this.FormBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    imageUrl: ['', [Validators.required]],
    category: ['', [Validators.required]],
    descriptions: ['', [Validators.required, Validators.minLength(10)]],
  }
)

constructor(private FormBuilder: FormBuilder, private router: Router) { }

 formSubmit(): void {
 

}

}
