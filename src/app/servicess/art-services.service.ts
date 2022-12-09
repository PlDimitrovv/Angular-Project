import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtServicesService {

  constructor(private Http:HttpClient) { }

  getAll(){
   return this.Http.get('http://localhost:3000/getAll')
  }
}

