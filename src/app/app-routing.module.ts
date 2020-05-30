import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUploadComponent } from './view-upload/view-upload.component';
import { ViewWebcamComponent } from './view-webcam/view-webcam.component';
import { ViewWebcamNComponent } from './view-webcam-n/view-webcam-n.component';


const routes: Routes = [
  { path: 'upload', component: ViewUploadComponent },
  { path: 'webcam', component: ViewWebcamComponent }
  // { path: 'webcam', component: ViewWebcamNComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
