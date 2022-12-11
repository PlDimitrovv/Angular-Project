import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})


export class ProfileComponent implements OnInit {
  public username: string | null
  public myArt: any


  constructor(private profileService: ProfileService, private authService: AuthService) {
    if (this.authService.getCurrentUser()) {

      this.username = this.authService.getCurrentUser().username

    } else {
      this.username = null
    }


  }

  ngOnInit(): void {
    this.myArt = this.profileService.getMyArt()
  }
}
