import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  errors: string | undefined = undefined;

  registerFrom = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(5)]],
    repass: ['', Validators.required]
  }, {
    validator: this.mustMatch("password", "repass")
  })
  //pass show hide
  public showPassword: boolean = false;
 

  constructor(private FormBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

//pass match 
  mustMatch(controlName: string, matchControlName: string) {
    return (fg: FormGroup) => {
      const control = fg.controls[controlName]
      const matchControl = fg.controls[matchControlName]
      if (control.value !== matchControl.value) {
        matchControl.setErrors({ mustMatch: true })
      } else {
        matchControl.setErrors(null)
      }
    }
  }

  formSubmit(): void {
    this.authService.register(this.registerFrom.value).subscribe({
      next: () => this.router.navigate(['/']),
      error:(err) => {
        this.errors = err.error.error
        console.log(this.errors);
      }
    })
  }
}



