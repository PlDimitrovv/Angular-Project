import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ArtServiceService } from '../art-service.service';


@Component({
  selector: 'app-art-form',
  templateUrl: './art-form.component.html',
  styleUrls: ['./art-form.component.scss']
})
export class ArtFormComponent {
  errors: string | undefined = undefined;
 
  artSubmitFrom = this.FormBuilder.group({
    title: ['', [Validators.required, Validators.minLength(5)]],
    imageUrl: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+$/i)]],
    artCategory: ['', [Validators.required]],
    description: ['', [Validators.required, Validators.minLength(10)]],
  }
)

constructor(private FormBuilder: FormBuilder, private router: Router, private artService : ArtServiceService) { }

formSubmit(): void {
  this.artService.createArt(this.artSubmitFrom.value).subscribe({
    next: () => this.router.navigate(['/']),
    error:(err) => {
      this.errors = err.error.error
    }
  })

}

}
