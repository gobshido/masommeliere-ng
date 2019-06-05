import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../service/title.service';
import {Globals} from '../../globals';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  title: string = Globals.APP_NAME;
  constructor(private titleservice: TitleService) {}
  ngOnInit(): void {
    this.titleservice.init();
  }

}
