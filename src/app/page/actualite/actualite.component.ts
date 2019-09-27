import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../service/title.service';
import {ActualiteService} from '../../service/actualite.service';
import {Actualite} from '../../class/actualite';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  actualites: Actualite[];
  public ready: boolean;

  constructor(
      public titleService: TitleService,
      private actualiteService: ActualiteService
  ) { }

  ngOnInit() {
    this.actualiteService.getActualites()
        .subscribe((actualites: Actualite[]) => {
          this.actualites = actualites;
          this.ready = true;
        });
    this.titleService.init();
  }

}
