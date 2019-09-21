import {Categorie} from './categorie';
import {Cible} from './cible';

export class Contact {
    id: number;
    email: string;
    lastname: string;
    firstname: string;
    message: string;
    sent: string;
    category: Categorie;
    cible: Cible;
}
