import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'Email is required!';
    }

    return this.email.hasError('email') ? 'Email is not valid!' : '';
  }

  getPasswordErrorMessage() {

    if (this.password.hasError('required')) {
      return 'Password is required!';
    }

    return this.password.hasError('password') ? 'Password is not valid!' : '';
  }
}


