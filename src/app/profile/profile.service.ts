import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IArt } from '../shared/interfaces/art';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getMyArt(){
    return this.http.get(`${API_URL}/myArt`)
}
  
}
