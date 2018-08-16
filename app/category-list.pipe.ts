import { Pipe } from '@angular/core';

@Pipe({
    name: 'categoryList',
    //This is the default is true === stateless
    //pure defines the pipe is stateless or stateful
    pure:  true
})
export class CategoryListPipe {
  transform(mediaItems) {
    var categories = [];
    mediaItems.forEach(mediaItem => {
      if (categories.indexOf(mediaItem.category) <= -1) {
        categories.push(mediaItem.category);
      }
    });
    //Here we are returning a string but angular accepts many data types
    return categories.join(', ');
  }
}