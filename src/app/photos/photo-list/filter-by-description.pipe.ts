<<<<<<< HEAD
import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(photo =>
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }

}
=======
import { Pipe, PipeTransform } from '@angular/core';

import { Photo } from '../photo/photo';

@Pipe({ name: 'filterByDescription'})
export class FilterByDescription implements PipeTransform {

    transform(photos: Photo[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
            .trim()
            .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(photo => 
                photo.description.toLowerCase().includes(descriptionQuery)
            );
        } else {
            return photos;
        }
    }

}
>>>>>>> d18d10e4c4bee9c93c456250f87c58913b8f50d3
