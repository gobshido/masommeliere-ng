import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CibleService {
  private uri = Globals.APP_API + 'cible';

  constructor(private http: HttpClient) { }
  getCibles() {
    return this.http.get(`${this.uri}`);
  }
  getCible(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
