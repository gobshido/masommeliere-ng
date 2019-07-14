import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModuleService {
  private uri = Globals.APP_API + 'module';

  constructor(private http: HttpClient) { }
  getModules() {
    return this.http.get(`${this.uri}`);
  }
}
