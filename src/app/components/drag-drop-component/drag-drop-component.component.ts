import { Component, OnInit } from '@angular/core';
import {
  CdkDragStart,
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray,
  CdkDragEnter,
  copyArrayItem,
  CdkDrag,
  CdkDragSortEvent,
  CdkDragExit,
  CdkDragConfig,
  CdkDragEnd,
  CdkDropList
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop-component',
  templateUrl: './drag-drop-component.component.html',
  styleUrls: ['./drag-drop-component.component.css']
})
export class DragDropComponentComponent implements OnInit {
  listDataDragDrop = [
    { id: 1, name: 'Food One', url: 'https://img.grouponcdn.com/deal/iZWf73rFjtX52DDDKArdJ8/IMAGE_CorkHouse-5616x3744/v1/c700x420.jpg' },
    { id: 2, name: 'Food Two', url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/13/0/fnd_chicken-dinner-istock.jpg.rend.hgtvcom.616.462.suffix/1447455541679.jpeg' },
    { id: 3, name: 'Food Three', url: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2012/07/06/BostonGlobe.com/Lifestyle/Images/11cheap1.jpg' },
    { id: 4, name: 'Food Four', url: 'http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_4602_StockFood-00389909.jpg&w=1200&h=660&lu=1483961401&ext=.jpg' },
    { id: 5, name: 'Food Five', url: 'https://img.grouponcdn.com/deal/iZWf73rFjtX52DDDKArdJ8/IMAGE_CorkHouse-5616x3744/v1/c700x420.jpg' },
    { id: 6, name: 'Food Six', url: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/11/13/0/fnd_chicken-dinner-istock.jpg.rend.hgtvcom.616.462.suffix/1447455541679.jpeg' },
    { id: 7, name: 'Food Seven', url: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2012/07/06/BostonGlobe.com/Lifestyle/Images/11cheap1.jpg' },
    { id: 8, name: 'Food Eight', url: 'http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_4602_StockFood-00389909.jpg&w=1200&h=660&lu=1483961401&ext=.jpg' },
    { id: 9, name: 'Food Nine', url: 'https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2012/07/06/BostonGlobe.com/Lifestyle/Images/11cheap1.jpg' },
    { id: 10, name: 'Food Ten', url: 'http://img.finedininglovers.com/?img=http%3A%2F%2Ffinedininglovers.cdn.crosscast-system.com%2FBlogPost%2FOriginal_4602_StockFood-00389909.jpg&w=1200&h=660&lu=1483961401&ext=.jpg' }
  ]
  breakfast = []
  constructor() { }

  ngOnInit() {
  }
  drop($event: CdkDragDrop<string[]>) {
    console.log('dropped ', $event);
    if (this.breakfast.length <= 0) {
      copyArrayItem($event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.previousIndex);
    } else {
      this.breakfast.splice(0, 1);
      copyArrayItem($event.previousContainer.data,
        $event.container.data,
        $event.previousIndex,
        $event.previousIndex);
    }

  }

}
