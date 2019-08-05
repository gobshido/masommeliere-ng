import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';
import { Router } from '@angular/router';
import { Globals } from './globals';
import {Prestation} from './class/prestation';
import {PrestationService} from './service/prestation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  opened: boolean;
  prestations: Prestation[];
  title: string = Globals.APP_NAME;
  showPart = false;
  showPro = false;

  constructor(private titleservice: TitleService,
              private prestationServ: PrestationService
  ) {}

  togglePart() {
    this.showPart = !this.showPart;
  }
  togglePro() {
    this.showPro = !this.showPro;
  }

  ngOnInit(): void {
    this.titleservice.init();
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
        });
  }
}
