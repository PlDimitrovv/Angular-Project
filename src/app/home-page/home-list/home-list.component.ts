import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/app/shared/interfaces/art';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit {
  public homeList: any
  public art: IArt | null = null
  isEmpty: boolean = true

  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
    this.homeService.getTop3().subscribe({
      next: (arts) => {
        this.homeList = arts
        if (this.homeList.length > 0) {
          this.isEmpty = true
        } else {
          this.isEmpty = false
        }
      }
    })
  }

}




