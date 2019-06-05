import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { Router } from '@angular/router';
import { Globals } from './globals';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean;
  title: string = Globals.APP_NAME;
  constructor(private titleservice: TitleService,
              private router: Router ) {}
  ngOnInit(): void {
    this.titleservice.init();
  }
}
