import { Component, OnInit } from '@angular/core';
import { BrowseService } from '../browse.service';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  public browseList: any

  constructor(private browseService: BrowseService) { }

  artLike(event: any) {
    for (let i = 0; i < this.browseList.length; i++) {
      if (this.browseList[i]._id == event._id) {
        this.browseList[i] = event
      }
    }
  }

  ngOnInit(): void {
    this.browseService.getAll().subscribe(arts => this.browseList = arts)
  }

}