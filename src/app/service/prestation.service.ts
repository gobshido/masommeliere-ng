import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private uri = Globals.APP_API + 'prestation';

  constructor(private http: HttpClient) { }
  getPrestations() {
    return this.http.get(`${this.uri}`);
  }
  getPrestation(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
