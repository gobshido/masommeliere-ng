import { Component, OnInit, Input } from '@angular/core';
import { Globals } from '../../globals';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  @Input() imgPath: string;
  @Input() alt: string;
  @Input() title: string;
  src: string;
  imgLoading: boolean;

  constructor() { }

  ngOnInit() {
    this.src = Globals.IMG_PATH_PREFIX + this.imgPath;
  }
  onImageLoad() {
    this.imgLoading = true;
  }

}
