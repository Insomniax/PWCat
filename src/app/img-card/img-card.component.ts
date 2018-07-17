import { Component, OnInit } from '@angular/core';
import {CatImage} from '../domain/cat-image';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.css']
})
export class ImgCardComponent implements OnInit {

  private image: CatImage = {
    message: 'Progressive Web Cat',
    api: 'https://picsum.photos/100',
    fontsize: 40
  };

  public src: string;

  constructor() { }

  ngOnInit() {
    this.generateSrc();
  }

  generateSrc(): void {
    this.src = this.image.api + '&ts=' + Date.now();
  }

}
