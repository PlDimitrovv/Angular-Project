import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent {
  @Input() artCards: any

  constructor(public authService: AuthService) { }

  onRatingSet(rating: number): void {
    console.warn(`User set rating to ${rating}`);
  }

  isCurrentOwner(ownerUsername: string): boolean {
    const currentUser = this.authService.getCurrentUser()
    if (currentUser != null) {
      return currentUser.username == ownerUsername
    }
    return false
  }

}
