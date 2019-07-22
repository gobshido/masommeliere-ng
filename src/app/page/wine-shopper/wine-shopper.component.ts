import { Component, OnInit } from '@angular/core';
import {Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';

@Component({
  selector: 'app-wine-shopper',
  templateUrl: './wine-shopper.component.html',
  styleUrls: ['./wine-shopper.component.css']
})
export class WineShopperComponent implements OnInit {
  prestations: Prestation[];

  constructor(
      private prestationServ: PrestationService,
      private titleService: TitleService,
  ) { }

  ngOnInit() {
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
        });
    this.titleService.init();
  }

}
