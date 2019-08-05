import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Prestation} from '../../class/prestation';
import {PrestationService} from '../../service/prestation.service';
import {TitleService} from '../../service/title.service';
import {Location} from '@angular/common';

@Component({
    selector: 'app-page-prestation',
    templateUrl: './page-prestation.component.html',
    styleUrls: ['./page-prestation.component.css']
})
export class PagePrestationComponent implements OnInit {
    prestation: Prestation;
    private ready: boolean;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private prestationServ: PrestationService,
                private titleService: TitleService,
                private location: Location
    ) {  }

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                this.prestationServ.getPrestation(params.id)
                    .subscribe((prestation: Prestation) => {
                        this.prestation = prestation;
                        this.ready = true;
                    });
            });
        this.titleService.init();
    }
    back() {
        this.location.back();
    }
}
