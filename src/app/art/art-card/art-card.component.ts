import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() artLiked: EventEmitter<any> = new EventEmitter();



  constructor(public authService: AuthService, public router: Router, public artService: ArtServiceService) { }

  likeArt(id: string) {
    this.artService.likeArt(id).subscribe(art => this.artLiked.emit(art))
  }

  calculateLikes(art: any) {
    return art.likes.length
  }

  isLikedByThisUser(art: any) {
   return art.likes.some((a: any) => a.userId == this.authService.getCurrentUser()._id)
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
