import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualiteService {
  private uri = Globals.APP_API + 'actualite';

  constructor(private http: HttpClient) {}
  getActualites() {
    return this.http.get(`${this.uri}`);
  }
}
