import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ArtServiceService } from '../art-service.service';

@Component({
  selector: 'app-art-card',
  templateUrl: './art-card.component.html',
  styleUrls: ['./art-card.component.scss']
})
export class ArtCardComponent {
  @Input() artCards: any

  constructor(public authService: AuthService, public router: Router, public artService: ArtServiceService) { }

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

  editArt(id: string) {
    this.router.navigate([`/editArt/${id}`])

  }

  deleteArt(id: string) {
    this.artService.deleteById(id).subscribe({
      next: () => this.router.navigate(['/']),
    })
    
    this.router.navigate([`/`])
  }
}
