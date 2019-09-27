import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import { Globals } from '../../globals';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title: string = Globals.APP_NAME;
  public ready: boolean;

  constructor(private titleservice: TitleService,
              private cookieService: CookieService
  ) {}
  ngOnInit(): void {
    this.ready = true;
    this.titleservice.init();
  }

}
