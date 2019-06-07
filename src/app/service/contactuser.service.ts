import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Globals } from '../globals';

@Injectable({
  providedIn: 'root'
})
export class ContactuserService {
  private uri = Globals.APP_API + 'contactuser';

  constructor(private http: HttpClient) { }
  getContactusers() {
    return this.http.get(`${this.uri}`);
  }
  getContactuser(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
