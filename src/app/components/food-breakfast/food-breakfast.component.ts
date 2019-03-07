import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-food-breakfast',
  templateUrl: './food-breakfast.component.html',
  styleUrls: ['./food-breakfast.component.css']
})
export class FoodBreakfastComponent implements OnInit, OnChanges {
  @Input('cdkDropListData') cdkDropListData: any;
  constructor() { }

  ngOnInit() {
    console.log(this.cdkDropListData);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log('changed ', changes);
  }

}
