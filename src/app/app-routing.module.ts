import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewUploadComponent } from './view-upload/view-upload.component';
import { ViewWebcamComponent } from './view-webcam/view-webcam.component';


const routes: Routes = [
  { path: 'upload', component: ViewUploadComponent },
  { path: 'webcam', component: ViewWebcamComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
