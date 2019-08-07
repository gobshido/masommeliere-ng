import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PressbookService {
  private uri = Globals.APP_API + 'pressbook';

  constructor(private http: HttpClient) { }
  getPressbooks() {
    return this.http.get(`${this.uri}`);
  }
  getPressbookById(id: number) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
