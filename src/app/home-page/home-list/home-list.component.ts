import { Component } from '@angular/core';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent {

  onRatingSet(rating: number): void {
    console.warn(`User set rating to ${rating}`);
  }

}


