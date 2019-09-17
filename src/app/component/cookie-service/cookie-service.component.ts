import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookie-service',
  templateUrl: './cookie-service.component.html',
  styleUrls: ['./cookie-service.component.css']
})
export class CookieServiceComponent implements OnInit {
  cookieValue = 'UNKNOWN';
  display: boolean;
  cookieExists: boolean;

  constructor(private cookieService: CookieService) { }

  ngOnInit() {
    this.display = true;
    this.cookieValue = this.cookieService.get('rgpd');
    this.cookieExists = this.cookieService.check('rgpd');
    if (this.cookieExists) {
      this.hide();
    }
  }
  cookieOk() {
    this.cookieService.set('rgpd', 'rgpd acceptance');
    this.display = false;
  }
  hide() {
    this.display = false;
  }
}
