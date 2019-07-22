import { Component, OnInit } from '@angular/core';
import { Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';
import {Prix} from '../../class/prix';
import {PrixService} from '../../service/prix.service';
import {Targetprice} from '../../class/targetprice';
import {TargetpriceService} from '../../service/targetprice.service';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.css']
})
export class ParticulierComponent implements OnInit {
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
