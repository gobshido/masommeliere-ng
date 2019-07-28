import { Pipe, PipeTransform } from '@angular/core';
import {Cible} from '../class/cible';
import {Prestation} from '../class/prestation';

@Pipe({
  name: 'cibleFilter'
})
export class CibleFilterPipe implements PipeTransform {

  transform(prestations: Prestation[], target?: string): any {
    return prestations.filter((prestation: Prestation) => {
      const targ = prestation.cibles.find((cible: Cible) => {
        return cible.nom === target;
      });
      return !!targ;
    });
  }
}
