import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TargetpriceService {
  private uri = Globals.APP_API + 'targetprice';

  constructor(private http: HttpClient) { }
  getTargetprices() {
    return this.http.get(`${this.uri}`);
  }
}
