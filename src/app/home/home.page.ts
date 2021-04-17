import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @ViewChild('mySlider') slider: IonSlides;
  sliderOpts = {
      autoplay: true,
      speed: 200,
      zoom: {
        maxRatio: 5
      }
    };
  }


