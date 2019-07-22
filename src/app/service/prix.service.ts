import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrixService {
  private uri = Globals.APP_API + 'prix';

  constructor(private http: HttpClient) { }
  getPrices() {
    return this.http.get(`${this.uri}`);
  }
}
