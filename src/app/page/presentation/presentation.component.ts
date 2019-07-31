import { Component, OnInit } from '@angular/core';
import { Contactuser } from '../../class/contactuser';
import { ContactuserService } from '../../service/contactuser.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  contactusers: Contactuser[];
  private ready: boolean;
  constructor(private contactServ: ContactuserService) { }

  ngOnInit() {
    this.contactServ.getContactusers()
        .subscribe((contactusers: Contactuser[]) => {
          this.contactusers = contactusers;
          this.ready = true;
        });
  }

}
