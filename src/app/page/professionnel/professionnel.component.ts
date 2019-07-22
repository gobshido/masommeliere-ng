import { Component, OnInit } from '@angular/core';
import {Prestation} from '../../class/prestation';
import {Prix} from '../../class/prix';
import {Targetprice} from '../../class/targetprice';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';
import {PrixService} from '../../service/prix.service';
import {TargetpriceService} from '../../service/targetprice.service';

@Component({
  selector: 'app-professionnel',
  templateUrl: './professionnel.component.html',
  styleUrls: ['./professionnel.component.css']
})
export class ProfessionnelComponent implements OnInit {
  prestations: Prestation[];
  prices: Prix[];
  targetPrices: Targetprice[];

  constructor(
      private prestationServ: PrestationService,
      private titleService: TitleService,
      private priceService: PrixService,
      private targetPriceService: TargetpriceService,
  ) { }

  ngOnInit() {
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
        });
    this.titleService.init();
    this.priceService.getPrices()
        .subscribe((prices: Prix[]) => {
          this.prices = prices;
        });
    this.targetPriceService.getTargetprices()
        .subscribe((targetPrices: Targetprice[]) => {
          this.targetPrices = targetPrices;
        });
  }

}
