import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  private REST_API = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}


  getMissions(): any {
    return this.http.get(this.REST_API);
  }

  public getMissionById(id: number): any {
    return this.http.get(`${this.REST_API}/${id}`);
  }
}
