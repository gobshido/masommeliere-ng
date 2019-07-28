import { Pipe, PipeTransform } from '@angular/core';
import {Prestation} from '../class/prestation';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(prestations: Prestation[], targetName?: string): any {
    return prestations.filter((prestation: Prestation) => {
      const name = prestation.categorie.nom;
      return name === targetName;
      });
  }
}
