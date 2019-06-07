import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imgPath: string;
  src: string;
  constructor() { }

  ngOnInit() {
    this.src = Globals.IMG_PATH_PREFIX + this.imgPath;
  }

}
