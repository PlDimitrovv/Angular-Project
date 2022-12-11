import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IArt } from '../shared/interfaces/art';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ArtServiceService {

  constructor(private http: HttpClient) { }

  createArt(artData: {}){
      return this.http.post(`${API_URL}/art`, artData)
  }
}
