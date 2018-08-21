import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-media-item',
  templateUrl: 'app/media-item.component.html',
  styleUrls: ['app/media-item.component.css']
})
export class MediaItemComponent {
  //  Can use an alias for an @Input
  //  @Inout("aliasName") AliasObject;
  @Input() mediaItem;
  //This is where you wire up the delete.emit()
  @Output() delete = new EventEmitter();

    counter = 1.5 + 1.5;
    number = String(this.counter)
    hide = true;

  onDelete() {
    this.delete.emit(this.mediaItem);
  }

  onUseless() {
    //handle the Useless Button event
      if (this.counter !== 1) {
          this.counter --;
          this.hide = true;
          this.printNumber()
      } else {
          this.counter = 4;
          this.hide = false;
          this.number = 'Lift Off !!!'
      }
  }

  printNumber(){
      this.number = String(this.counter)
  }

}
