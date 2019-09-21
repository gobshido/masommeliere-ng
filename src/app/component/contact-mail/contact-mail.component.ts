import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup} from '@angular/forms';
import { Categorie } from '../../class/categorie';
import { CategorieService } from '../../service/categorie.service';
import { Cible } from '../../class/cible';
import { CibleService } from '../../service/cible.service';
import { Globals } from '../../globals';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-mail',
  templateUrl: './contact-mail.component.html',
  styleUrls: ['./contact-mail.component.css']
})
export class ContactMailComponent implements OnInit {
    categorie: Categorie[];
    cible: Cible[];
    mail: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      private categorieService: CategorieService,
      private cibleService: CibleService
    ) {
        this.mail = this.formBuilder.group({
            firstname: '',
            lastname: '',
            email: '',
            message: '',
            category: '',
            cible: ''
        });
    }

    ngOnInit() {
    this.categorieService.getCategories()
        .subscribe((categories: Categorie[]) => {
          this.categorie = categories;
        });
    this.cibleService.getCibles()
        .subscribe((cibles: Cible[]) => {
          this.cible = cibles;
        });
    }
    onSubmit() {
        const val = this.mail.value;
        const obj = {
            firstname: val.firstname,
            lastname: val.lastname,
            email: val.email,
            message: val.message,
            category: val.category,
            cible: val.cible
        };
        // return this.http.post(Globals.APP_API + 'contact/new', obj);
    }
}
