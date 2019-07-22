import { Component, OnInit } from '@angular/core';
import {Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';

@Component({
  selector: 'app-invitation-voyage',
  templateUrl: './invitation-voyage.component.html',
  styleUrls: ['./invitation-voyage.component.css']
})
export class InvitationVoyageComponent implements OnInit {
  prestations: Prestation[];

  constructor(
      private prestationServ: PrestationService,
      private titleService: TitleService
  ) { }

  ngOnInit() {
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
        });
    this.titleService.init();
  }

}
