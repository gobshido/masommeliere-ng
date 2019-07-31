import { Pipe, PipeTransform } from '@angular/core';
import {Prestation} from '../class/prestation';
import {Cible} from '../class/cible';

@Pipe({
    name: 'cibleFilter'
})
export class CibleFilterPipe implements PipeTransform {

    transform(prestations: Prestation[], target?: string): any {
        if (prestations) {
            return prestations.filter((prestation: Prestation) => {
                const targ = prestation.cibles.find((cible: Cible) => {
                    return cible.nom === target;
                });
                return !!targ;
            });
        }
        return prestations;
    }
}
