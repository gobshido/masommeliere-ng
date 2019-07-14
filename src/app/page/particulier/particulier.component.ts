import { Component, OnInit } from '@angular/core';
import { Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';

@Component({
  selector: 'app-particulier',
  templateUrl: './particulier.component.html',
  styleUrls: ['./particulier.component.css']
})
export class ParticulierComponent implements OnInit {
  prestations: Prestation[];

  constructor(private prestationServ: PrestationService) { }

  ngOnInit() {
    this.prestationServ.getPrestations()
        .subscribe((prestations: Prestation[]) => {
          this.prestations = prestations;
        });
  }

}
