import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ArtServiceService } from '../art-service.service';

@Component({
  selector: 'app-art-edit',
  templateUrl: './art-edit.component.html',
  styleUrls: ['./art-edit.component.scss']
})
export class ArtEditComponent implements OnInit {
  public artId: string | any

  constructor(private artService: ArtServiceService, private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.artId = params['id'];
    
    }
    )}
}
