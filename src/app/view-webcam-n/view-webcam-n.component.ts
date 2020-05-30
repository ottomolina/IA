import { Component, OnInit } from '@angular/core';
import * as cocoSSD from '@tensorflow-models/coco-ssd';

@Component({
  selector: 'app-view-webcam-n',
  templateUrl: './view-webcam-n.component.html',
  styleUrls: ['./view-webcam-n.component.css']
})
export class ViewWebcamNComponent implements OnInit {

  title = 'TF-ObjectDetection';
  private video: HTMLVideoElement;


  ngOnInit() {
    this.webcam_init();
    this.predictWithCocoModel();
  }

  public async predictWithCocoModel() {
    console.log('0');
    const model = await cocoSSD.load();
    console.log('1');
    this.detectFrame(this.video, model);
    console.log('2');
    console.log('model loaded');
  }

  webcam_init() {
    this.video = (document.getElementById('video') as HTMLVideoElement);

    navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        facingMode: 'user',
      }
    }).then(stream => {
        this.video.srcObject = stream;
        this.video.onloadedmetadata = () => {
        this.video.play();
      };
    });
  }

  detectFrame = (video: any, model: { detect: (arg0: any) => Promise<any>; }) => {
    model.detect(video).then((predictions: any) => {
      this.renderPredictions(predictions);
      requestAnimationFrame(() => {
        this.detectFrame(video, model);
      });
    });
  }

  renderPredictions = (predictions: any[]) => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    canvas.width  = 300;
    canvas.height = 300;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    // Font options.
    const font = '16px sans-serif';
    ctx.font = font;
    ctx.textBaseline = 'top';
    ctx.drawImage(this.video, 0, 0, 300, 300);

    predictions.forEach((prediction: { bbox: any[]; class: string; }) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      const width = prediction.bbox[2];
      const height = prediction.bbox[3];
      // Draw the bounding box.
      ctx.strokeStyle = '#00FFFF';
      ctx.lineWidth = 2;
      ctx.strokeRect(x, y, width, height);
      // Draw the label background.
      ctx.fillStyle = '#00FFFF';
      const textWidth = ctx.measureText(prediction.class).width;
      const textHeight = parseInt(font, 10); // base 10
      ctx.fillRect(x, y, textWidth + 4, textHeight + 4);
    });

    predictions.forEach((prediction: { bbox: any[]; class: string; }) => {
      const x = prediction.bbox[0];
      const y = prediction.bbox[1];
      // Draw the text last to ensure it's on top.
      ctx.fillStyle = '#000000';
      ctx.fillText(prediction.class, x, y);
    });
  }

}
