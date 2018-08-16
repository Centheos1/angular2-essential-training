import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

/**
 * This is Service for mediaItem and handles HTTP request and responses
 *
 * Go to media-item-list.component from here
 *
 */

@Injectable()
export class MediaItemService {
  constructor(private http: HttpClient) {}


  //returns mediaItem objects - the interface for the object is below
  get(medium) {
    let getOptions = {
      params: { medium }
    };
    return this.http.get<MediaItemsResponse>('mediaitems', getOptions)
      .pipe(
        map((response: MediaItemsResponse) => {
          return response.mediaItems;
        })
      );
  }
  
  add(mediaItem) {
    return this.http.post('mediaitems', mediaItem);
  }
  
  delete(mediaItem) {
    return this.http.delete(`mediaitems/${mediaItem.id}`);
  }
}

interface MediaItemsResponse {
  mediaItems: MediaItem[]
}


//This is the interface for 'mediaItem' objects
interface MediaItem {
  id: number;
  name: string;
  medium: string;
  category: string;
  year: number;
  watchedOn: number;
  isFavorite: boolean;
}