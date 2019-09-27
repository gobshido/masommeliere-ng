import { Component, OnInit } from '@angular/core';
import {TitleService} from '../../service/title.service';
import {Contactuser} from '../../class/contactuser';
import {ContactuserService} from '../../service/contactuser.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public ready: boolean;
  contactusers: Contactuser[];

  constructor(
      public titleService: TitleService,
      private contactServ: ContactuserService
  ) { }

  ngOnInit() {
    this.contactServ.getContactusers()
        .subscribe((contactusers: Contactuser[]) => {
          this.contactusers = contactusers;
          this.ready = true;
        });
    this.titleService.init();
  }

}
