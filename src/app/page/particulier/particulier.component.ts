import { Component, OnInit } from '@angular/core';
import { Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.css']
})
export class ParticulierComponent implements OnInit {
    prestations: Prestation[];
    private ready: boolean;

  constructor(
    private router: Router,
    private prestationServ: PrestationService,
    private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
          this.ready = true;
        });
    this.titleService.init();
  }
}
