import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoService } from './photos/photo/photo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  photos: Object[];

  constructor(private photoService: PhotoService) {
    this.photos = [];
    this.photoService
      .listFromUser('flavio')
      .subscribe(photos => this.photos = photos);
  }

}
