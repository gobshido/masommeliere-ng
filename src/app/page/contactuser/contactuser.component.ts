import { Component, OnInit } from '@angular/core';
import { Contactuser } from '../../class/contactuser';
import { ContactuserService } from '../../service/contactuser.service';

@Component({
  selector: 'app-contactuser',
  templateUrl: './contactuser.component.html',
  styleUrls: ['./contactuser.component.css']
})
export class ContactuserComponent implements OnInit {
  contactusers: Contactuser[];
  constructor(private contactServ: ContactuserService) { }

  ngOnInit() {
    this.contactServ.getContactusers()
        .subscribe((contactusers: Contactuser[]) => {
          this.contactusers = contactusers;
        });
  }

}
