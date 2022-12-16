import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent implements OnInit{
  public homeList: any

  constructor(private homeService: HomeService) { }
 
ngOnInit(): void {
  this.homeService.getTop3().subscribe(arts => this.homeList = arts)
}


}




