import { Pipe, PipeTransform } from '@angular/core';
import {Prix} from '../class/prix';
import {Targetprice} from '../class/targetprice';

@Pipe({
    name: 'targetPriceFilter'
})
export class TargetPriceFilterPipe implements PipeTransform {

    transform(prices: Prix[], targetValue?: number): any {
        if (prices) {
            return prices.filter((price: Prix) => {
                const target = price.targetprices.find( (targetPrice: Targetprice) => {
                    return targetPrice.value === targetValue;
                });
                return !!target;
            });
        }
        return prices;
    }
}
