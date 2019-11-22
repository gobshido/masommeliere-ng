import { Component, OnInit } from '@angular/core';
import { Contactuser } from '../../class/contactuser';
import { ContactuserService } from '../../service/contactuser.service';
import { Pressbook } from '../../class/pressbook';
import { PressbookService } from '../../service/pressbook.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {
  contactusers: Contactuser[];
  pressbooks: Pressbook[];
  public ready: boolean;
  public ready2: boolean;

  constructor(
      private contactServ: ContactuserService,
      private pressBookServ: PressbookService
  ) { }

  ngOnInit() {
        this.contactServ.getContactusers()
            .subscribe((contactusers: Contactuser[]) => {
                this.contactusers = contactusers;
                this.ready = true;
            });
        this.pressBookServ.getPressbooks()
            .subscribe((pressbooks: Pressbook[]) => {
                this.pressbooks = pressbooks;
                this.ready2 = true;
            });
  }

}
