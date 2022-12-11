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
  
  ngOnInit(): void {
    console.log(">>>");
    
    this.browseList = this.browseService.getAll()
  }
}