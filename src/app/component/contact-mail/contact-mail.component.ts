import { Component, OnInit } from '@angular/core';
import {FormControl, FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl} from '@angular/forms';
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
    emailSubmit: boolean;
    emailFailed: boolean;

    constructor(
      private formBuilder: FormBuilder,
      private categorieService: CategorieService,
      private cibleService: CibleService,
      private http: HttpClient
    ) {}

    ngOnInit() {
    this.categorieService.getCategories()
        .subscribe((categories: Categorie[]) => {
          this.categorie = categories;
        });
    this.cibleService.getCibles()
        .subscribe((cibles: Cible[]) => {
          this.cible = cibles;
        });
    this.userEmailForm();
    }

    onSubmit() {
        const val = this.mail.value;
        const obj = {
            firstname: val.firstname,
            lastname: val.lastname,
            email: val.email,
            message: val.message,
            category: val.category.id,
            cible: val.cible.id
        };
        return this.http.post(Globals.APP_API + 'contact/new', obj).subscribe(
            () => {
                this.emailSubmit = true;
            },
            () => {
                this.emailFailed = true;
            }
        );
    }
    userEmailForm() {
        this.mail = this.formBuilder.group({
            firstname: [null, Validators.required],
            lastname: [null, Validators.required],
            email: [null, Validators.compose([
                Validators.email,
                Validators.required])],
            message: [null, Validators.required],
            category: [null, Validators.required],
            cible: [null, Validators.required]
        });
    }
    refresh() {
        this.emailSubmit = false;
        this.emailFailed = false;
        this.ngOnInit();
    }
}
