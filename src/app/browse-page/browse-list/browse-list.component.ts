import { Component, OnInit } from '@angular/core';
import { IArt } from 'src/app/shared/interfaces/art';
import { BrowseService } from '../browse.service';


@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit {
  public browseList: any
  public art: IArt[] | null = null
  isEmpty : boolean = true

  constructor(private browseService: BrowseService) { }

  artLike(event: any) {
    for (let i = 0; i < this.browseList.length; i++) {
      if (this.browseList[i]._id == event._id) {
        this.browseList[i] = event
      }
    }
  }
  
  ngOnInit(): void {
    this.browseService.getAll().subscribe({
      next: (arts)=>{
        this.browseList = arts
        if(this.browseList.length > 0){
          this.isEmpty = true
        }else{
          this.isEmpty = false
        }
      }
    })

  }

}