import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private authService: AuthService) {
    
  }

  getUsername() {
    if (this.authService.getCurrentUser()) {

      return this.authService.getCurrentUser().username

    } else {
      return null
    }
  }

  isLogged() {
    return this.authService.isLoggedIn()
  }

}


