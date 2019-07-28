import {Prix} from './prix';
import {Cible} from './cible';
import {Module} from './module';
import {Categorie} from './categorie';

export class Prestation {
    id: number;
    nom: string;
    description: string;
    categorie: Categorie;
    cibles: Cible[];
    modules: Module[];
    prices: Prix[];
}
