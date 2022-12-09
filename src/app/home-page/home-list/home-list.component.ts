import { Component, OnInit } from '@angular/core';
import { ArtServicesService } from 'src/app/servicess/art-services.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
 
  onRatingSet(rating: number): void {
    console.warn(`User set rating to ${rating}`);
  }

constructor(private ArtService: ArtServicesService){

}

  ngOnInit(): void {
    this.ArtService.getAll().subscribe(x => console.log(x));
  }

}




