import { Component, OnInit } from '@angular/core';
import {Module} from '../../class/module';
import {ModuleService} from '../../service/module.service';
import {TitleService} from '../../service/title.service';
import {ActualiteService} from '../../service/actualite.service';
import {Actualite} from '../../class/actualite';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.css']
})
export class ActualiteComponent implements OnInit {
  modules: Module[];
  actualites: Actualite[];
  private ready: boolean;

  constructor(
      private moduleService: ModuleService,
      private titleService: TitleService,
      private actualiteService: ActualiteService
  ) { }

  ngOnInit() {
    this.actualiteService.getActualites()
        .subscribe((actualites: Actualite[]) => {
          this.actualites = actualites;
          this.ready = true;
        });
    this.moduleService.getModules()
        .subscribe((modules: Module[]) => {
          this.modules = modules;
        });
    this.titleService.init();
  }

}
