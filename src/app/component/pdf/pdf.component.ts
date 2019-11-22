import {Component, Input, OnInit} from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {
  @Input() pathrelatif: string;
  src: string;

  constructor() { }

  ngOnInit() {
    this.src = Globals.IMG_PATH_PREFIX + this.pathrelatif;
  }

}
