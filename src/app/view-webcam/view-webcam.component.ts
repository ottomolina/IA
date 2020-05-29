import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import * as mobilenet from '@tensorflow-models/mobilenet';
import * as tf from '@tensorflow/tfjs';

export interface Prediction {
  className: string;
  probability: number;
}

@Component({
  selector: 'app-view-webcam',
  templateUrl: './view-webcam.component.html',
  styleUrls: ['./view-webcam.component.css']
})
export class ViewWebcamComponent implements OnInit, AfterViewInit {

  @ViewChild('video') video: ElementRef;
  predictions: Prediction[];
  model: any;
  loading = true;
  constructor() { }

  async ngOnInit() {
    console.log('Cargando modelo de mobilnet...');
    this.model = await mobilenet.load();
    console.log('Carga de modelo exitosa');
    this.loading = false;

    setInterval(async () => {
      this.predictions = await this.model.classify(this.video.nativeElement);
      await tf.nextFrame();
    }, 3000);
  }

  async ngAfterViewInit() {
    const vid = this.video.nativeElement;

    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then((stream) => {
          vid.srcObject = stream;

        })
        .catch((err0r) => {
          console.log('Something went wrong!');
        });
    }
  }

}
