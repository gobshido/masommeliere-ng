import { Injectable } from '@angular/core';
import {Globals} from '../globals';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private uri = Globals.APP_API + 'categorie';

  constructor(private http: HttpClient) { }
  getCategories() {
    return this.http.get(`${this.uri}`);
  }
  getCategorie(id: string) {
    return this.http.get(`${this.uri}/${id}`);
  }
}
