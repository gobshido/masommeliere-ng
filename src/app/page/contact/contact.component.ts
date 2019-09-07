import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../service/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  private ready: boolean;

  constructor(
      private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.titleService.init();
    this.ready = true;
  }

}
