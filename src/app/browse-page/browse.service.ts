import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

const API_URL = environment.apiUrl

@Injectable({
  providedIn: 'root'
})
export class BrowseService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(`${API_URL}/browse`)
}
  
}
