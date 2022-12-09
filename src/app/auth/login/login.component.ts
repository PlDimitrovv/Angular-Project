import { Component } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../auth.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errors: string | undefined = undefined;

  loginForm = this.FormBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],

  })

  constructor(private FormBuilder: FormBuilder, private authService: AuthService, private router: Router) { }


  formSubmit(): void {
    this.authService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigate(['/']),
      error:(err) => {
        this.errors = err.error.error
      }
    })
  }

}


