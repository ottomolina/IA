import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as mobilenet from '@tensorflow-models/mobilenet';

export interface Prediction {
  className: string;
  probability: number;
}

@Component({
  selector: 'app-view-upload',
  templateUrl: './view-upload.component.html',
  styleUrls: ['./view-upload.component.css']
})
export class ViewUploadComponent implements OnInit {

  imageSrc: string;
  @ViewChild('img') imageEl: ElementRef;

  predictions: Prediction[];

  model: any;
  loading = true;


  constructor() { }

  async ngOnInit() {
    console.log('Cargando modelo de mobilenet...');
    this.model = await mobilenet.load();
    console.log('Carga de mobilenet exitosa');
    this.loading = false;
  }

  async fileChangeEvent(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
          this.predictions = await this.model.classify(imgEl);
        }, 0);

      };
    }

  }

}
