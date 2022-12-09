import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {


  constructor(private AuthService: AuthService){
  
  }

  isLogged(){
    return this.AuthService.isLogged()
  }
  
}


