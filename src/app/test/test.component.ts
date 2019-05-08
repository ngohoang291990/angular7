import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: []
})
export class TestComponent implements OnInit {
  @Input("parentData") public name;

  @Output() public eventChild=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.eventChild.emit('Xin Chao Thanh Tan');
  }
}
