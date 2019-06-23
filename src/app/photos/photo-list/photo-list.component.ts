import { Component, OnInit } from '@angular/core';

import { Photo } from '../photo/photo';
import { PhotoService } from '../photo/photo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];
  filter: string = '';

  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const userName: string = this.activatedRoute.snapshot.params.username;
    this.photoService
      .listFromUser(userName)
      .subscribe(photos => this.photos = photos);
  }

}
